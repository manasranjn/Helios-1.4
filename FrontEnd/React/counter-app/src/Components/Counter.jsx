import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const boxStyle = {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#20f0f0",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={boxStyle}>
      <h2>Counter</h2>
      <p style={{ fontSize: "40px" }}>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log("Decrement Function");
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
