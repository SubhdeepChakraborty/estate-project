import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        h={"-moz-max-content"}
        background={"black"}
        borderTop={"1px"}
        borderTopColor={"ActiveBorder"}
        color={"whiteAlpha.900"}
      >
        <Box p={"10"}>
          <VStack>
            <Heading fontWeight={"hairline"}>Get started with H-Estate</Heading>
            <Heading as="h3" size={"md"} fontWeight={"hairline"}>
              Subscribe and find your residencies
            </Heading>
            <Button>Subscribe</Button>
          </VStack>
        </Box>
        <Flex alignContent={"center"} justifyContent={"space-between"}>
          <Box w={"400px"} p={"2.5"}>
            <VStack>
              <Heading as="h2" fontWeight={"hairline"}>
                {" "}
                Vision
              </Heading>
              <Heading as="h6" size={"xs"} fontWeight={"hairline"}>
                To make people happy
              </Heading>
            </VStack>
          </Box>
          <Box w={"400px"} p={"2.5"}>
            <VStack>
              <Heading as="h2" fontWeight={"hairline"}>
                {" "}
                Information
              </Heading>
              <Heading as="h6" size={"xs"} fontWeight={"hairline"}>
                Kolkata | India West Bengal
              </Heading>
              <Box>
                <Flex>
                  <Wrap spacing={"2.5"}>
                    <WrapItem>
                      <Link>Property</Link>
                    </WrapItem>
                    <WrapItem>
                      <Link>Services</Link>
                    </WrapItem>
                    <WrapItem>
                      <Link>Product</Link>
                    </WrapItem>
                    <WrapItem>
                      <Link>About us</Link>
                    </WrapItem>
                  </Wrap>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
