import React from "react";
import "./homeComponent.css";
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Text,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Value = () => {
  return (
    <Flex
      // background={"aliceblue"}
      h={"max-content"}
      p={"10"}
      //   color={"white"}
      // backgroundColor={"black"}
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
              xl: "auto",
            }}
          >
            <VStack>
              <Heading
                as={"h3"}
                size={"2xl"}
                color={"orange"}
                fontWeight={"hairline"}
              >
                Our Value
              </Heading>
              <Box
                w={"360px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Heading
                  as="h6"
                  size={"xs"}
                  fontWeight={"hairline"}
                  w="fit-content"
                >
                  Value We Give to You
                </Heading>
              </Box>
              <Box>
                <Heading as={"h6"} size={"xs"} className="Home-image">
                  We are always ready to help by providing the best services for
                  you. We believe a good place to live can make your life
                  better.
                </Heading>
              </Box>
              <Box>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      {/* <AccordionButton> */}
                      <Box as="span" flex="1" textAlign="left">
                        Click me to see a different style
                      </Box>
                      <AccordionIcon />
                      {/* </AccordionButton> */}
                    </h2>
                    <AccordionPanel>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
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
            xl: "auto",
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
    // </div>
  );
};

export default Value;
