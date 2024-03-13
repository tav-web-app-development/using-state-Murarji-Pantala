import React from "react";
import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products }) {
  const productsJsx = products.map((product, index) => (
    <ProductCard key={index} product={product} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
