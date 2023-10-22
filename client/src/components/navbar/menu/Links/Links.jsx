import React from "react";
import { Link } from "@chakra-ui/react";

const Links = () => {
  const items = ["Home", "HOme", "HOme", "HOme"];
  return (
    <div className="links">
      {items.map((ele) => {
        return <Link>{ele}</Link>;
      })}
    </div>
  );
};

export default Links;
