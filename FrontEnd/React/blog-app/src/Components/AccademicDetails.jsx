import React from "react";

const AccademicDetails = ({ data }) => {
  return (
    <div>
      <h1>Accademic Details</h1>
      <p>Course: {data.course}</p>
      <p>Mark: {data.mark}</p>
    </div>
  );
};

export default AccademicDetails;
