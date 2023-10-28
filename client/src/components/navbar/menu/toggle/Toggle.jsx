import React, { useState } from "react";
import "./toggle.css";
import { motion } from "framer-motion";

const Toggle = ({ setOpen }) => {
  const [buttonClicked, setButtonCLicked] = useState(true);
  const handlesituation = () => {
    setOpen((prev) => !prev);
    setButtonCLicked((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handlesituation}>
        <svg width={"23"} height={"23"} viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
        </svg>
      </button>
    </div>
  );
};

export default Toggle;
