import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import React from "react";
import { Home, HomeComponent, Residency, Start, Value } from "../pages";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComponent />} />
          <Route path="started" element={<Start />} />
          <Route path="value" element={<Value />} />
          <Route path="residencies" element={<Residency />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
