import React from "react";
import { Link } from "react-router-dom";
import formatProductPrice from "../utils/formatProductPrice";

const ProductItem = ({ product }) => {
  const price = formatProductPrice(product);

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <Link to={`/${product.id}`}>
          <img
            className="lg:h-auto md:h-42 w-full object-cover object-center"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {product.category}
          </h2>
          <Link to={`/${product.id}`}>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              {product.name}
            </h1>
          </Link>
          <p className="leading-relaxed mb-3">{product.description}</p>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/${product.id}`}
              className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Shop Now
            </Link>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
