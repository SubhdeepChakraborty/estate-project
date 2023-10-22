import { Wrap, WrapItem, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <>
      <Box
        p={"2"}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Box w={"100vw"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Marquee>
              <Wrap spacing={"20"}>
                <WrapItem>
                  <Image
                    boxSize="190px"
                    // objectFit="cover"
                    src="./Image2.png"
                    alt=""
                  />
                </WrapItem>
                <WrapItem>
                  <Image
                    boxSize="190px"
                    // objectFit="cover"
                    src="./Image3.png"
                    alt=""
                  />
                </WrapItem>
                <WrapItem>
                  <Image
                    boxSize="190px"
                    // objectFit="cover"
                    src="./Image4.png"
                    alt=""
                  />
                </WrapItem>
                <WrapItem>
                  <Image
                    boxSize="190px"
                    // objectFit="cover"
                    src="./Image5.png"
                    alt=""
                  />
                </WrapItem>
                <WrapItem mr={"20"}>
                  <Image
                    boxSize="190px"
                    // objectFit="cover"
                    src="./Image6.png"
                    alt=""
                  />
                </WrapItem>
              </Wrap>
            </Marquee>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Companies;
