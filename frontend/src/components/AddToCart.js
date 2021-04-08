import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToCart({ product, selectedSize }) {
  const { addItem } = useShoppingCart();

  function handleAddItem() {
    if (!selectedSize) {
      toast.error("Please select a size");
    } else {
      addItem(product);
      toast.success(`${product.name} added to your cart`);
    }
  }

  return (
    <button
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      onClick={handleAddItem}
    >
      Add To Cart
    </button>
  );
}
