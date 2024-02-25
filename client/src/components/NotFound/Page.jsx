import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Page = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
      backgroundColor={"whiteAlpha.600"}
      flexDirection={"column"}
    >
      <Image
        src="https://i.pinimg.com/736x/ff/3f/97/ff3f9762dfedc6ac2012967666b273d6.jpg"
        alt="Dan Abramov"
      />
      <Text fontSize={"medium"} mt={"5px"} fontWeight={"semibold"}>
        Click to{" "}
        <Link href="/register" color={"purple.800"}>
          Register
        </Link>{" "}
        first..
      </Text>
    </Box>
  );
};

export default Page;
