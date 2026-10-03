import React from "react";

const PersonalDetails = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <h1>Personal Details</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
};

export default PersonalDetails;
