import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

function useQueryString() {
  return new URLSearchParams(useLocation().search);
}

export default function Result() {
  const queryString = useQueryString();
  const { cartCount, clearCart } = useShoppingCart();
  const sessionId = queryString.get("session_id");
  console.log(cartCount);
  const { data, isLoading, isError } = useQuery("Result", () =>
    sessionId
      ? axios(`/api/checkout-sessions/${sessionId}`).then((res) => res.data)
      : null
  );

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  if (isLoading) return <CircularProgress color="secondary" />;
  if (!data && !isLoading)
    return (
      <div className="text-white font-bold text-center mx-auto">
        No purchase found.
      </div>
    );
  if (isError)
    return (
      <div className="text-red-500 font-bold text-center mx-auto">
        Error loading result page
      </div>
    );

  const total = formatCurrencyString({
    value: data.amount_total,
    currency: data.currency,
    language: navigator.language,
  });
  console.log(data);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            Order placed successfully.
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-xl mx-auto">
            Below is your order summary. Your order will be shipped within the
            next 48 hours.
          </p>
          <br />
          <div className="m-8">
            <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font mb-1">
              Order Total: {total}
            </h2>
            <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font mb-1">
              Email: {data.customer_details.email}
            </h2>
            <div className="m-8">
              <h5>Shipping address: </h5>
              <h6 className="text-indigo-400">{data.shipping.name}</h6>
              <p>
                {data.shipping.address.line1} {data.shipping.address.line2}
              </p>
              <p>
                {data.shipping.address.city} -{" "}
                {data.shipping.address.postal_code},{" "}
                {data.shipping.address.state}, {data.shipping.address.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
