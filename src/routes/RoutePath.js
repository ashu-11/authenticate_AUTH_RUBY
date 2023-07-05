import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Extra from "../components/Extra";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/extra" element={<Extra />} />
    </Routes>
  );
};

export default RoutePath;
