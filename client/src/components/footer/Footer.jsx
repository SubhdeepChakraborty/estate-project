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
        <Box
          p={{
            base: "2.5",
            md: "10",
          }}
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
            >
              Get started with H-Estate
            </Heading>
            <Heading
              as="h3"
              size={"md"}
              fontWeight={"hairline"}
              fontSize={{
                base: "small",
                md: "4xl",
                // lg: "5xl",
                // xl: "x-large",
              }}
            >
              Subscribe and find your residencies
            </Heading>
            <Button
              size={{
                base: "sm",
                md: "md",
              }}
            >
              Subscribe
            </Button>
          </VStack>
        </Box>
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
          >
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
              {/* </Box> */}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
