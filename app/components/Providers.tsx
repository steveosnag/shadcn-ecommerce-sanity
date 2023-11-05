"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="ZAR"
      //allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
      shouldPersist={true} // store cart on localstorage so that it is not lost on refresh
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
