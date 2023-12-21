import {
  Flex,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { RiMessageFill } from "react-icons/ri";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "call",
    number: "021 231 45 14",
    buttonText: "Call now",
    icon: IoMdCall,
  },
  {
    id: 2,
    name: "Chat",
    number: "021 231 45 14",
    buttonText: "Chat now",
    icon: AiFillMessage,
  },
  {
    id: 3,
    name: "Video call",
    number: "021 231 45 14",
    buttonText: "Video call now",
    icon: FaVideo,
  },
  {
    id: 4,
    name: "Message",
    number: "021 231 45 14",
    buttonText: "Message now",
    icon: RiMessageFill,
  },
];

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
            h="270px"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
          >
            {data?.map((item) => (
              <motion.div
                key={item?.id}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                <GridItem rowSpan={1} colSpan={1} p={"15px"} className="border">
                  <Box>
                    <Flex flexDirection={"column"}>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                        // mt={"px"}
                      >
                        <Box
                          w={"50px"}
                          h={"50px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          borderRadius={"10px"}
                          backgroundColor={"gray.200"}
                        >
                          {console.log(item?.icon)}
                          {item?.icon && <item.icon size={"30"} color="blue" />}
                        </Box>
                        <Box>
                          <Heading as="h2" size="md" fontWeight={"medium"}>
                            {item?.name}
                          </Heading>
                          <Text color={"gray.700"}>{item?.number}</Text>
                        </Box>
                      </Flex>
                      <motion.div
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          ease: "easeInOut",
                        }}
                      >
                        <Button
                          w={"90%"}
                          mr={"20px"}
                          color={"blue"}
                          variant={"outline"}
                          _hover={{
                            backgroundColor: "blue",
                            color: "white",
                          }}
                        >
                          {item?.buttonText}
                        </Button>
                      </motion.div>
                    </Flex>
                  </Box>
                </GridItem>
              </motion.div>
            ))}
            {/* <GridItem rowSpan={1} colSpan={1} bg="blue.500"></GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="blue.500"></GridItem> */}
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
