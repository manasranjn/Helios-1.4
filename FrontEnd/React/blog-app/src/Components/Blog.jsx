import React from "react";

const Blog = ({ title, content, author }) => {
  //   console.log(props);

  // console.log(title);
  // console.log(content);
  // console.log(author);

  // let arr = [1, 2, 3, 4, 5];
  // let [a, b, c, d, e] = arr;
  // console.log(a, b, c, d, e);

  return (
    <div
      style={{
        border: "1px solid red",
        backgroundColor: "lightblue",
        width: "500px",
        margin: "10px",
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{author}</span>
    </div>
  );
};

export default Blog;
