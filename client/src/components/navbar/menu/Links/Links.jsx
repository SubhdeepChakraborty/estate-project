import React from "react";
import { Link, Text } from "@chakra-ui/react";

const Links = () => {
  const items = ["", "prize", "start", "residencies"];
  return (
    <div className="links">
      {items.map((ele, i) => {
        return (
          <Link href={`/${ele}`} key={i}>
            <Text fontSize={""} fontWeight={""} className="text">
              {ele === "" ? "home" : `${ele}`}
            </Text>
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
