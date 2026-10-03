import React from "react";
import PersonalDetails from "./PersonalDetails";
import AccademicDetails from "./AccademicDetails";

const StudentDetails = ({ data }) => {
  console.log(data);

  return (
    <div>
      <PersonalDetails data={data} />
      <AccademicDetails data={data} />
    </div>
  );
};

export default StudentDetails;
