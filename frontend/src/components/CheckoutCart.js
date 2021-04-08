import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import useCheckout from "./customHook/useCheckout";

export default function CheckoutCart() {
  const { cartCount } = useShoppingCart();
  const handleCheckout = useCheckout();

  return (
    <button
      className="inline-flex items-center bg-green-700 border-0 text-xl  py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-white md:mt-0"
      onClick={handleCheckout}
      disabled={!cartCount}
    >
      Checkout
    </button>
  );
}
