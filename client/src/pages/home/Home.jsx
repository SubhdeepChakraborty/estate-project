import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import "./home.css";
import { Box } from "@chakra-ui/react";
import { useGlobalAreaContext } from "../../components/context/Context";

const Home = () => {
  const { onClose } = useGlobalAreaContext();
  return (
    <Box background={"aliceblue"} className="mainBox">
      <Navbar />
      <Box onClick={onClose}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
