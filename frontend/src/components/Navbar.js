import React from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import { IoIosFootball } from "react-icons/io";
import { FcSportsMode } from "react-icons/fc";

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-800 body-font p-4">
      <div className="container mx-auto flex justify-between md:flex-row items-center p-5 pt-0">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 "
        >
          <div className="flex">
            <FcSportsMode style={{ fontSize: 70 }} />
            <IoIosFootball className="self-end	" style={{ fontSize: 20 }} />
          </div>
        </Link>
        <div className="flex justify-between items-center	flex-col sm:flex-row">
          <CartSummary />
          <CheckoutCart />
        </div>
      </div>
    </header>
  );
}
