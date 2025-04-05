
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import Stripe from 'https://esm.sh/stripe@12.18.0';

// Use the provided Stripe secret key
const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY') || 'sk_test_51Gx2sVCNjyaQ14tCkUFXzPWfxUlklnrdpAuCFIJdjOOYGXtRckpGVf2SVvONUq3z7N81TqWWBlv2K0u91pY1yVvr0059r3ugyr';

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
});

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  
  try {
    const { productType, customerEmail, customerName, shippingAddress, region, bookCover, isFreeSwaggerism } = await req.json();
    
    console.log('Creating checkout session with:', { productType, customerEmail, customerName, shippingAddress, region, isFreeSwaggerism });
    
    const origin = req.headers.get('origin') || 'http://localhost:5173';
    console.log('Request origin:', origin);
    
    // For digital products that are free, we don't need to create a Stripe session
    if (productType === 'digital') {
      return new Response(JSON.stringify({ 
        url: `${origin}/success?session_id=free_digital_${Date.now()}`,
        sessionId: `free_digital_${Date.now()}`
      }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Define line items based on product type
    let lineItems = [];
    let requiresShipping = false;
    
    if (productType === 'physical') {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Elevate Higher Book - Physical Copy (${bookCover})`,
            description: 'Physical copy of Elevate Higher book',
          },
          unit_amount: 2999, // $29.99 in cents
        },
        quantity: 1,
      });
      
      // Add shipping costs based on region
      let shippingCost = 0;
      if (region === 'us_canada') {
        // USA & Canada: Shipping $11.99 + handling $2.98 = $14.97
        shippingCost = 1497;
      } else if (region === 'europe') {
        // Europe: Shipping (including handling) is $14.99
        shippingCost = 1499;
      }
      
      if (shippingCost > 0) {
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Shipping & Handling',
              description: region === 'us_canada' ? 'USA & Canada Shipping & Handling' : 'Europe Shipping & Handling',
            },
            unit_amount: shippingCost,
          },
          quantity: 1,
        });
      }
      
      requiresShipping = true;
    } else if (productType === 'swaggerism') {
      // Check if it's the free Swaggerism offer
      if (isFreeSwaggerism) {
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Swaggerism My Religion - FREE Copy (Pre-Order)',
              description: 'Limited Time Offer: Free copy of Swaggerism My Religion (Ships July 15)',
            },
            unit_amount: 0, // Free
          },
          quantity: 1,
        });
        
        // Still need to add shipping even for free book
        let shippingCost = 0;
        if (region === 'us_canada') {
          shippingCost = 1497;
        } else if (region === 'europe') {
          shippingCost = 1499;
        }
        
        if (shippingCost > 0) {
          lineItems.push({
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Shipping & Handling',
                description: region === 'us_canada' ? 'USA & Canada Shipping & Handling' : 'Europe Shipping & Handling',
              },
              unit_amount: shippingCost,
            },
            quantity: 1,
          });
        }
      } else {
        // Regular Swaggerism pre-order
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Swaggerism My Religion - Physical Copy (Pre-Order)',
              description: 'Pre-order of Swaggerism My Religion book (Ships July 15)',
            },
            unit_amount: 2599, // $25.99 in cents
          },
          quantity: 1,
        });
        
        // Add shipping costs based on region
        let shippingCost = 0;
        if (region === 'us_canada') {
          // USA & Canada: Shipping $11.99 + handling $2.98 = $14.97
          shippingCost = 1497;
        } else if (region === 'europe') {
          // Europe: Shipping (including handling) is $14.99
          shippingCost = 1499;
        }
        
        if (shippingCost > 0) {
          lineItems.push({
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Shipping & Handling',
                description: region === 'us_canada' ? 'USA & Canada Shipping & Handling' : 'Europe Shipping & Handling',
              },
              unit_amount: shippingCost,
            },
            quantity: 1,
          });
        }
      }
      
      requiresShipping = true;
    } else if (productType === 'bundle') {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Book Bundle: Elevate Higher + Swaggerism My Religion',
            description: 'Physical copies of both Elevate Higher and Swaggerism My Religion (Pre-Order)',
          },
          unit_amount: 5398, // $53.98 in cents
        },
        quantity: 1,
      });
      
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'FREE Shipping & Handling',
            description: 'Complimentary shipping for the bundle',
          },
          unit_amount: 0,
        },
        quantity: 1,
      });
      
      requiresShipping = true;
    }
    
    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail,
      metadata: {
        customer_name: customerName,
        product_type: productType,
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}#order`,
    };
    
    // Only add shipping address collection for physical products
    if (requiresShipping) {
      sessionConfig.shipping_address_collection = {
        allowed_countries: region === 'us_canada' ? ['US', 'CA'] : ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'],
      };
      sessionConfig.metadata.shipping_address = JSON.stringify(shippingAddress);
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    console.log('Checkout session created:', session.id);
    console.log('Checkout session URL:', session.url);
    
    return new Response(JSON.stringify({ 
      url: session.url,
      sessionId: session.id
    }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }
});
