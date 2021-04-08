import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import formatProductPrice from "../utils/formatProductPrice";

export default function CartItem({ cartItem }) {
  const { setItemQuantity } = useShoppingCart();

  function handleSetItemQuantity(event) {
    setItemQuantity(cartItem.id, event.target.value);
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center px-4 py-3 bg-gray-200 rounded hover:bg-gray-100 -mx-4 w-full justify-between">
        <div className="flex ">
          <img
            className="h-16 w-16 rounded object-cover mx-1"
            src={cartItem.image}
            alt={cartItem.name}
          />
          <p className="text-gray-600 text-lg mx-2">
            <span className="font-bold">
              {cartItem.name} {cartItem.selectedSize}
            </span>
            <br />
            {formatProductPrice(cartItem)} x {cartItem.quantity}
          </p>
        </div>
        <div>
          <input
            style={{ width: 50 }}
            className="border-solid border-2"
            type="number"
            value={cartItem.quantity}
            onChange={handleSetItemQuantity}
            min={0}
          />
        </div>
      </div>
    </div>
  );
}
