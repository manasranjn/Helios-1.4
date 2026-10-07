import React, { useRef } from "react";

const UnControlled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(name, email, password);
  };

  return (
    <div>
      <h1>UnControlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UnControlled;
