import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";

import { useState, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import React from "react";

import { auth } from "../../firebase";
const AnimatedRoutes = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      
        <Route path="/Home" element={<Home user={userName} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
