import React, { useState, useEffect } from "react";
import { IoIosCreate } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");

  const [error, setError] = useState("");

  const id = useParams().id;
  const navigate = useNavigate();

  // console.log(id);

  const getData = () => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        setName(res.data.name);
        setDesignation(res.data.designation);
        setSalary(res.data.salary);
        setExperience(res.data.experience);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/employees/${id}`, {
        name,
        designation,
        salary,
        experience,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-mist-300">
      <form
        className="p-6 rounded-lg bg-white flex flex-col gap-4 min-w-lg"
        data-aos="fade-up"
      >
        <h1 className="text-2xl font-semibold text-center">Update Employee </h1>

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
          className="bg-blue-500 text-white p-2 rounded cursor-pointer flex gap-4 justify-center items-center"
          onClick={handleUpdate}
        >
          Save <IoIosCreate size={20} />
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
