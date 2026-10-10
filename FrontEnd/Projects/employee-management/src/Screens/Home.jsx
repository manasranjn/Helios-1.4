import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        // console.log(res);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-mist-300 p-8 md:p-12 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {employees.map((emp, ind) => (
        <div
          key={ind}
          className="bg-white p-5 rounded-md h-1/3 relative"
          {...(ind % 2 === 0 && { "data-aos": "fade-right" })}
          {...(ind % 2 === 1 && { "data-aos": "fade-up" })}
        >
          <h3 className="font-semibold text-lg">{emp.name}</h3>
          <h3 className="font-semibold text-lg">{emp.designation}</h3>
          <h3 className="font-semibold text-lg">{emp.salary}</h3>
          <h3 className="font-semibold text-lg">{emp.experience}</h3>

          <div className="flex justify-between absolute bottom-5 left-5 right-5">
            <button
              className="px-5 py-2 rounded bg-blue-500 cursor-pointer text-white"
              onClick={() => navigate(`/edit/${emp.id}`)}
            >
              Edit
            </button>
            <button
              className="px-5 py-2 rounded bg-red-500 cursor-pointer text-white"
              onClick={() => handleDelete(emp.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
