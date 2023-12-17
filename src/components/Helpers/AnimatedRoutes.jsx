
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import { AnimatePresence } from "framer-motion";
import ProductPage from "../Pages/ProductPage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </AnimatePresence>

  );
};

export default AnimatedRoutes;
