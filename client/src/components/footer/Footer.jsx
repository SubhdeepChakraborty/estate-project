import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { AtSignIcon } from "@chakra-ui/icons";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        h={"-moz-max-content"}
        // background={"black"}
        borderTop={"1px"}
        borderTopColor={"ActiveBorder"}
      >
        <Flex
          alignContent={"center"}
          justifyContent={"space-between"}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Box
            w={{
              sm: "100vw",
              md: "400px",
            }}
            p={"2.5"}
            display={{
              base: "none",
              md: "flex",
            }}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <VStack>
              <Heading as="h2" fontWeight={"hairline"}>
                {" "}
                Vision
              </Heading>
              <Heading as="h6" size={"xs"} fontWeight={"hairline"}>
                To make people happy
              </Heading>
              <Box display={"flex"} alignItems={"center"} gap={"2px"}>
                <FaRegCopyright />
                <Text
                  display={"inline-block"}
                  fontSize={"medium"}
                  fontWeight={"bold"}
                >
                  Subhadeep Chakraborty
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box
            w={{
              sm: "100vw",
              md: "400px",
            }}
            p={"2.5"}
          >
            <VStack>
              <Heading as="h2" fontWeight={"hairline"}>
                {" "}
                Information
              </Heading>
              <Heading as="h6" size={"xs"} fontWeight={"hairline"}>
                India | West Bengal
              </Heading>
              {/* <Box> */}
              <Flex>
                <Wrap spacing={"2.5"}>
                  <WrapItem>
                    <Link>
                      <Text fontWeight={"bold"}>Property</Text>
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Link>
                      <Text fontWeight={"bold"}>Services</Text>
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Link>
                      <Text fontWeight={"bold"}>Product</Text>
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Link>
                      <Text fontWeight={"bold"}>About us</Text>
                    </Link>
                  </WrapItem>
                </Wrap>
              </Flex>
              {/* </Box> */}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
