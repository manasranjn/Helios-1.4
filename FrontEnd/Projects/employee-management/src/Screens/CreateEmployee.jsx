import React from "react";

const CreateEmployee = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-mist-300">
      <form className="p-6 rounded-lg bg-white flex flex-col gap-4 min-w-[400px]">
        <input
          type="text"
          placeholder="Enter Employee Name"
          className="p-2 rounded bg-gray-200 outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter Designation"
          className="p-2 rounded bg-gray-200 outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter Salary"
          className="p-2 rounded bg-gray-200 outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter Experience"
          className="p-2 rounded bg-gray-200 outline-none border-none"
        />
        <button className="bg-green-500 text-white p-2 rounded cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
