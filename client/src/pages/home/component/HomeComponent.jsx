import React, { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  VStack,
  Wrap,
  WrapItem,
  InputGroup,
  InputLeftElement,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Footer } from "../../../components";
import "./homeComponent.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AddIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CountUp from "react-countup";
import Companies from "./Companies";
import { SwiperResi } from "../../../functions";

const HomeComponent = () => {
  return (
    <>
      {/* <Box> */}
      <Flex
        background={"aliceblue"}
        h={"-moz-max-content"}
        p={"10"}
        color={"white"}
        backgroundColor={"black"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100vw"}
      >
        <Wrap spacing={"10"}>
          <WrapItem alignItems={"center"}>
            <Box
              p={"5px"}
              w={{
                base: "100%",
                lg: "100vw",
                md: "100vw",
                sm: "100vw",
                xl: "auto", // Set width to auto for xl breakpoint
              }}
            >
              <VStack>
                <Heading as={"h1"} fontWeight={"hairline"}>
                  Discover Most Suitable Property
                </Heading>
                <Box w={"360px"}>
                  <Heading
                    as="h6"
                    size={"xs"}
                    fontWeight={"hairline"}
                    w="-moz-fit-content"
                  >
                    Find a variety of properties that suit you very easily
                    forget all difficulties in finding a residencies for you.
                  </Heading>
                </Box>
                <Box w={"400px"}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="blue.800"
                      fontSize="1.2em"
                      children={<LocationOnIcon />}
                    />
                    <Input placeholder="Search.." />
                  </InputGroup>
                </Box>
                <Box>
                  <Flex>
                    <Wrap spacing={"2.5"}>
                      <WrapItem>
                        <VStack>
                          <HStack>
                            <Heading as="h6" size="lg" fontWeight={"bold"}>
                              <CountUp end={9000} duration={3} />
                            </Heading>
                            <Text>
                              <AddIcon />
                            </Text>
                          </HStack>
                          <Text>Happy Customer</Text>
                        </VStack>
                      </WrapItem>
                      <WrapItem>
                        <VStack>
                          <HStack>
                            <Heading as="h6" size="lg" fontWeight={"bold"}>
                              <CountUp end={28} duration={3} />
                            </Heading>
                            <Text>
                              <AddIcon />
                            </Text>
                          </HStack>
                          <Text>Award Winning</Text>
                        </VStack>
                      </WrapItem>
                    </Wrap>
                  </Flex>
                </Box>
              </VStack>
            </Box>
          </WrapItem>
          <WrapItem
            w={{
              base: "100%",
              lg: "100vw",
              md: "100vw",
              sm: "100vw",
              xl: "auto", // Set width to auto for xl breakpoint
            }}
            display={{
              lg: "flex",
              md: "flex",
              sm: "flex",
              xl: "",
            }}
            alignContent={{
              lg: "center",
              md: "center",
              sm: "center",
              xl: "",
            }}
            justifyContent={{
              lg: "center",
              md: "center",
              sm: "center",
              xl: "",
            }}
          >
            <Box overflow={"hidden"} borderTopRadius={"full"}>
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
              >
                <Box boxSize={"400px"}>
                  <LazyLoadImage
                    // boxSize="400px"
                    // objectFit="cover"
                    style={{
                      objectFit: "cover",
                    }}
                    effect="blur"
                    src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="House Image"
                  />
                </Box>
              </motion.div>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
      {/* </Box> */}
      <Box>
        <Companies />
      </Box>
      <Box>
        <SwiperResi Name={"Residencies"} />
      </Box>
      <Footer />
    </>
  );
};
export default HomeComponent;
