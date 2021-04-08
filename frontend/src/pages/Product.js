import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import AddToCart from "../components/AddToCart";
import LoadingSpinner from "../components/LoadingSpinner";
import RemoveFromCart from "../components/RemoveFromCart";
import formatProductPrice from "../utils/formatProductPrice";

export default function Product() {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  console.log(selectedSize);
  const { data: product, isLoading, isError, error } = useQuery(
    ["Product", "productId"],
    () => axios(`/api/products/${productId}`).then((res) => res.data.product)
  );

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-red-500 font-bold text-center mx-auto">
        {error.message}
      </div>
    );

  const price = formatProductPrice(product);

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center	">
          <img
            alt={product.name}
            className="lg:w-1/2 w-full lg:h-full object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-8">
              {product.name}
            </h1>
            <p className="leading-relaxed">{product.description_long}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
            <div className="flex items-center items-center pb-5 border-b-2 border-gray-800 mb-5">
              <h3>Select Size :</h3>
              <div className="flex items-center">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                    onClick={() => {
                      setSelectedSize(size);
                      toast.success(`Size selected "${size}"`);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                {price}
              </span>
              <AddToCart product={product} selectedSize={selectedSize} />
              <RemoveFromCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
