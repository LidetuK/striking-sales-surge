
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import Stripe from "https://esm.sh/stripe@17.7.0?target=deno";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      productType, 
      region, 
      bookCover, 
      isFreeSwaggerism, 
      customerEmail, 
      customerName, 
      shippingAddress 
    } = await req.json();
    
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Check if it's a digital product, which is free
    if (productType === "digital") {
      // Just return success for digital products
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    // Get origin with proper base path handling for deployment
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    let basePath = "";
    
    // Determine base path for production vs development
    if (referer.includes("/empowerment/self-development-guide/elevate-higher-the-book/") || 
        origin.includes("books.reskque.com")) {
      basePath = "/empowerment/self-development-guide/elevate-higher-the-book";
    }
    
    // Get product price based on type
    let productPrice = 0;
    if (productType === "physical" || productType === "swaggerism" || productType === "bundle") {
      productPrice = 2599; // $25.99
    }
    
    if (isFreeSwaggerism && productType === "swaggerism") {
      productPrice = 0;
    }
    
    // Calculate shipping cost
    let shippingCost = 0;
    if (productType !== "digital" && productType !== "bundle") {
      shippingCost = region === "us_canada" ? 1497 : 1499; // $14.97 or $14.99
    }
    
    // Determine product name
    let productName = "Elevate Higher";
    if (productType === "swaggerism") {
      productName = isFreeSwaggerism ? "Swaggerism My Religion - FREE COPY" : "Swaggerism My Religion";
    } else if (productType === "bundle") {
      productName = "Book Bundle: Elevate Higher + Swaggerism My Religion";
    } else if (productType === "physical") {
      productName = `Elevate Higher - Physical Book (${bookCover})`;
    }
    
    // Create line items
    const lineItems = [];
    
    // Add product
    if (productPrice > 0) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: productName,
          },
          unit_amount: productPrice,
        },
        quantity: 1,
      });
    }
    
    // Add shipping if applicable
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Shipping",
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      });
    }
    
    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerEmail,
      client_reference_id: customerName,
      success_url: `${origin}${basePath}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${basePath}/`,
      shipping_address_collection: productType !== "digital" ? {
        allowed_countries: ["US", "CA", "GB", "DE", "FR", "ES", "IT"],
      } : undefined,
      metadata: {
        productType,
        customerName,
        customerEmail,
        shippingInfo: productType !== "digital" ? JSON.stringify(shippingAddress) : "",
      },
    });
    
    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
    
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
