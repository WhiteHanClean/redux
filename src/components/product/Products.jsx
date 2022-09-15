import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      {products.map((product) => {
        return (
          <div className="products_container" key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
