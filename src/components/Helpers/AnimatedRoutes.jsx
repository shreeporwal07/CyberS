
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import { db } from "../../firebase";
import { useState ,useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { AnimatePresence } from "framer-motion";
import ProductPage from "../Pages/ProductPage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../firebase";
const AnimatedRoutes = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [showdata, setShowdata] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const query = ref(db, "products");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProductsData((projects) => [...projects, project]);
          setShowdata(true);
        });
      }
    });
  }, []);

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
        <Route path="/Home" element={showdata && <Home user={userName} products={productsData} />} />
        <Route path="/ProductPage/:id" element={<ProductPage/>} />
      </Routes>
    </AnimatePresence>

  );
};

export default AnimatedRoutes;