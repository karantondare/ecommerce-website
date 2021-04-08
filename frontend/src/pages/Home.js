import React from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className=" container px-5 py-16 mx-auto flex flex-wrap -m-4">
        <ProductList />
      </div>
    </section>
  );
}
