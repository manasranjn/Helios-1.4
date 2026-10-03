import React from "react";

const NewsCard = ({ blog }) => {
  //   console.log(blog);
  const { title, content, image, category, date } = blog || {};

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
        padding: "16px",
      }}
    >
      <img src={image} alt={title} style={{ height: "200px", width: "100%" }} />
      <h2>{title}</h2>
      <h5>{category}</h5>
      <p>{content}</p>
      <span>{date}</span>
    </div>
  );
};

export default NewsCard;
