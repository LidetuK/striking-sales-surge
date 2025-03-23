
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
    const { price, customerEmail, customerName, shippingAddress } = await req.json();
    
    console.log('Creating checkout session with:', { customerEmail, customerName, shippingAddress });
    
    const origin = req.headers.get('origin') || 'http://localhost:5173';
    console.log('Request origin:', origin);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Elevate Higher Book',
              description: 'Your FREE copy - just pay shipping & handling',
            },
            unit_amount: 995, // $9.95 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      metadata: {
        customer_name: customerName,
        shipping_address: JSON.stringify(shippingAddress),
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}#order`,
    });

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
