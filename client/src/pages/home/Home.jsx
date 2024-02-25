import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import "./home.css";
import { Box } from "@chakra-ui/react";
import { useGlobalAreaContext } from "../../components/context/Context";
import GridLoader from "react-spinners/GridLoader";
import { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { allow, setAllow } = useGlobalAreaContext();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { onClose } = useGlobalAreaContext();
  return (
    <>
      {loading ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <GridLoader size={30} color="#36d7b7" />
          </Box>
        </>
      ) : (
        <>
          <Box background={"aliceblue"} className={allow ? "" : "mainBox"}>
            {!allow && <Navbar />}
            <Box onClick={onClose}>
              <Outlet />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
