import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import React, { useState } from "react";
import { Home, HomeComponent, Residency, Start, Value } from "../pages";
import { Login } from "../components";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComponent />} />
          <Route path="login" element={<Login />} />
          <Route path="start" element={<Start />} />
          <Route path="prize" element={<Value />} />
          <Route path="residencies" element={<Residency />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
