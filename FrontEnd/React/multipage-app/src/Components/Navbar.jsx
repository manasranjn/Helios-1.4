import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          console.log("Button Clicked");

          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
