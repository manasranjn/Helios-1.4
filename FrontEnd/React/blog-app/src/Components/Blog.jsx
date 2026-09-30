import React from "react";

const Blog = (props) => {
  //   console.log(props);

  return (
    <div
      style={{
        border: "1px solid red",
        backgroundColor: "lightblue",
        width: "500px",
        margin: "10px",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <span>{props.author}</span>
    </div>
  );
};

export default Blog;
