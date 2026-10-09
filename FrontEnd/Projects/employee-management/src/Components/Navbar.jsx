import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 md:px-12 lg:px-20 py-2 md:py-3 bg-slate-500 text-white">
      <h1 className="text-2xl font-semibold">Emp Management</h1>

      <ul className="flex gap-6">
        <li className="hover:font-semibold hover:text-orange-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:font-semibold hover:text-orange-300">
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
