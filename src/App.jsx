import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
