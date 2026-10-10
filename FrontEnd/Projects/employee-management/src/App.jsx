import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Screens/Home";
import CreateEmployee from "./Screens/CreateEmployee";
import EditEmployee from "./Screens/EditEmployee";
import aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  aos.init();

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
