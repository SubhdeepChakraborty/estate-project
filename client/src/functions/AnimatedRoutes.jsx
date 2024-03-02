import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import React, { useState } from "react";
import { Home, HomeComponent, Residency, Start } from "../pages";
import { Login, Register, Page } from "../components";
import { useGlobalAreaContext } from "../components/context/Context";

const AnimatedRoutes = () => {
  const { allow, setAllow } = useGlobalAreaContext();
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}>
          <Route index element={allow ? <Login /> : <HomeComponent />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="start" element={allow ? <Page /> : <Start />} />
          <Route
            path="residencies"
            element={allow ? <Page /> : <Residency />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
