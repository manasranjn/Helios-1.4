import React, { useState, useEffect } from "react";
import Product from "./Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // console.log(data.products);
    setProducts(data.products);
  };

  //   getAllProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-4 md:p-10 bg-slate-200 min-h-screen">
      <h1>All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
