import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="py-4 md:py-6 text-center bg-slate-500">
      <p className="text-gray-100">
        Copyright &copy; {year} | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
