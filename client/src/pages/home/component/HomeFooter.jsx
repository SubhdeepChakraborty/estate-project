import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const HomeFooter = () => {
  return (
    <Box>
      <Box
        // w={{
        //   base: "350px",
        //   md: "full",
        // }}
        display={{
          base: "flex",
          md: "",
        }}
        alignItems={{
          base: "center",
          md: "",
        }}
        justifyContent={{
          base: "center",
          md: "",
        }}
        p={{
          base: "2.5",
          md: "10",
        }}
        color={"white"}
        background={"#25316D"}
        borderRadius={"10px"}
        border={"solid"}
        borderColor={"#5d77d6"}
      >
        <VStack>
          <Heading
            fontWeight={"hairline"}
            fontSize={{
              base: "inherit",
              md: "4xl",
              // lg: "5xl",
              // xl: "x-large",
            }}
            fontStyle={"revert-layer"}
          >
            Get started with H-Estate
          </Heading>
          <Heading
            as="h3"
            size={"md"}
            fontWeight={"hairline"}
            fontSize={{
              base: "small",
              md: "2xl",
              // lg: "5xl",
              // xl: "x-large",
            }}
            color={"gray.200"}
          >
            Subscribe and find your residencies
          </Heading>
          <Button
            w={"auto"}
            zIndex={"0"}
            size={{
              base: "sm",
              md: "md",
            }}
            variant={"unstyled"}
          >
            Get started
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HomeFooter;
