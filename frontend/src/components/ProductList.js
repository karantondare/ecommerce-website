import React from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useQuery } from "react-query";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ProductList() {
  const { data: products, isLoading } = useQuery("Products", () =>
    axios("/api/products").then((res) => res.data.products)
  );

  if (isLoading) return <CircularProgress color="secondary" />;

  return products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
}
