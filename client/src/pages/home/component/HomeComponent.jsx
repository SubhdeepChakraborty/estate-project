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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AddIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CountUp from "react-countup";
import { SwiperResi } from "../../../functions";
import { Value, data, Companies, HomeFooter, Contact } from "./subcomponent";
import axios from "axios";
import { useState } from "react";

const HomeComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/users/search?searchTerm=${searchQuery}`
        );
        console.log(response.data); // Log the response data to the console
        setData(response.data.users);
      } catch (err) {
        console.error(err); // Log any errors to the console
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setSearchQuery("");
    }
  }, [searchQuery]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

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
                <Heading
                  as={"h1"}
                  fontSize={{
                    base: "2xl",
                    md: "4xl",
                    // lg: "5xl",
                    // xl: "x-large",
                  }}
                  fontWeight={"hairline"}
                >
                  Discover Most Suitable Property
                </Heading>
                <Box w={"360px"}>
                  <Heading
                    as="h6"
                    size={"xs"}
                    fontWeight={"hairline"}
                    w="-moz-fit-content"
                    className="Home-image"
                  >
                    Find a variety of properties that suit you very easily
                    forget all difficulties in finding a residencies for you.
                  </Heading>
                </Box>
                <Box
                  w={{
                    base: "250px",
                    md: "400px",
                  }}
                  position={"relative"}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="blue.800"
                      fontSize="1.2em"
                      children={<LocationOnIcon />}
                    />
                    <Input
                      placeholder="Search.."
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                  <Box zIndex={1} position={"absolute"}>
                    {searchQuery &&
                      data?.map((e) => <Box key={e.id}>{e.name}</Box>)}
                  </Box>
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
                <Box boxSize={"400px"} className="Home-image">
                  {/* <Box> */}
                  <LazyLoadImage
                    // boxSize="400px"
                    // objectFit="cover"
                    effect="blur"
                    src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="House Image"
                  />
                </Box>
                {/* </Box> */}
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
      <Box>
        <Value />
      </Box>
      <Box>
        <Contact />
      </Box>
      <Box>
        <HomeFooter />
      </Box>
      <Footer />
    </>
  );
};
export default HomeComponent;
