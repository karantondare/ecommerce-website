import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartModal from "./CartModal";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

export default function CartSummary() {
  const { cartCount } = useShoppingCart();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        onClick={toggleModal}
        className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer	"
      >
        <span className="mr-5 hover:text-white flex items-center">
          {cartCount === 0 ? (
            <IoCartOutline style={{ fontSize: 35 }} />
          ) : (
            <IoCartSharp style={{ fontSize: 35 }} />
          )}
          <span className="ml-3 text-2xl">({cartCount})</span>
        </span>
      </nav>
      <CartModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}
