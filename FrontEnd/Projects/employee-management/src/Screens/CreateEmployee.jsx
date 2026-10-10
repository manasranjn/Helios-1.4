import React, { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !designation || !salary || !experience) {
      setError("Please fill all the fields");
      return;
    }

    const employee = {
      name,
      salary,
      experience,
      designation,
    };

    axios
      .post("http://localhost:5000/employees", employee)
      .then((res) => {
        navigate("/");
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-mist-300">
      <form
        className="p-6 rounded-lg bg-white flex flex-col gap-4 min-w-lg"
        data-aos="fade-up"
      >
        <h1 className="text-2xl font-semibold text-center">Create Employee </h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Enter Employee Name"
          className="p-2 rounded bg-gray-200 outline-none border-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Designation"
          className="p-2 rounded bg-gray-200 outline-none border-none"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Salary"
          className="p-2 rounded bg-gray-200 outline-none border-none"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Experience"
          className="p-2 rounded bg-gray-200 outline-none border-none"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded cursor-pointer flex gap-4 justify-center items-center"
          onClick={handleSubmit}
        >
          Create <IoIosCreate size={20} />
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
