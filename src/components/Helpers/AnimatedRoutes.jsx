import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import { AnimatePresence } from "framer-motion";
import ProductPage from "../Pages/ProductPage";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage/:id" element={<ProductPage/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
