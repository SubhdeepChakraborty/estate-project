import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import "./home.css";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box background={"aliceblue"} className="mainBox">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Home;
