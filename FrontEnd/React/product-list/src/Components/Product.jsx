import React from "react";

const Product = ({ title, price, description, category, rating }) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg font-bold">${price.toFixed(2)}</p>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-between mt-4">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-yellow-500 px-3 py-1 rounded-full">
          {rating}⭐
        </span>
      </div>
    </div>
  );
};

export default Product;
