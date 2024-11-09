import React from "react";
import Header from "./components/header/Header";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import { Routes, Route } from "react-router-dom";

const MainBody = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default MainBody;
