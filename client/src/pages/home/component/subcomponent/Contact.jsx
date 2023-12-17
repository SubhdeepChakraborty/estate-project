import { Flex, Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

const Contact = () => {
  return (
    <Flex
      height={{
        base: "800px",
        md: "850px",
        lg: "650px",
        xl: "650px",
      }}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        id="About"
        // flexGrow={"1"}
        flexDirection={"column"}
        p={"5px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Heading
            mb={"3"}
            fontSize={"larger"}
            fontWeight={"hairline"}
            color={"orange"}
          >
            Contact us
          </Heading>
          <Heading mb={"3"} fontWeight={"medium"}>
            24/7 online for you
          </Heading>
          <Text mb={"3"} w={"500px"}>
            Always ready to help by providing the best services for you. We
            believe a good place to live can make your life better.
          </Text>
        </Box>
        <Box w={"100%"}>
          <Grid
            h="200px"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="blue.500"></GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="blue.500"></GridItem>
          </Grid>
        </Box>
        <Box
          w={{
            base: "300px",
            md: "400px",
          }}
        ></Box>
      </Box>
      <Box
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "500px",
          xl: "500px",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={{
          base: "5px",
          md: "",
          lg: "",
        }}
        // mt={"16"}
      >
        <Box overflow={"hidden"} borderTopRadius={"full"}>
          <Box
            boxSize={{
              base: "300px",
              md: "400px",
            }}
          >
            {/* <Box> */}
            <LazyLoadImage
              // boxSize="400px"
              // objectFit="cover"
              effect="blur"
              src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="House Image"
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
