import React, { useContext } from "react";
import { example } from "../App";

const FoodCard = () => {
  // console.log(example);
  const data = useContext(example);
  console.log(data);

  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.price}</h2>
      <h2>{data.rating}</h2>
    </div>
  );
};

export default FoodCard;
