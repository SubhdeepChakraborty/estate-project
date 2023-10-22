import React, { useState } from "react";
import Links from "./Links/Links";
import Toggle from "./toggle/Toggle";
import "./menu.css";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MenuItem = () => {
  const [open, setOpen] = useState();
  const variants = {
    open: {
      clipPath: "circle(1200px at 35px 35px)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(30px at 35px 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};

export default MenuItem;
