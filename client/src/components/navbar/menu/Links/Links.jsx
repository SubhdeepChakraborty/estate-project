import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["", "prize", "start", "residencies"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((ele, i) => {
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{
              scale: 1.3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link to={`/${ele}`} key={i}>
              <Text fontSize={"2xl"} fontWeight={""} className="text">
                {ele === "" ? "home" : `${ele}`}
              </Text>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Links;
