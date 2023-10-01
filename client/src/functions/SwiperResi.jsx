import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/Utils.json";
import {
  HStack,
  Image,
  Text,
  Box,
  Heading,
  VStack,
  Card,
  CardHeader,
  Avatar,
  Flex,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const SwiperResi = ({ Name }) => {
  console.log(data);
  return (
    <>
      <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
        <Box
          w={"900px"}
          justifyContent={"flex-start"}
          display={"flex"}
          alignContent={"center"}
          flexDirection={"column"}
          overflow={"hidden"}
        >
          <Box>
            <Heading
              as={"h1"}
              size={"2xl"}
              color={"orange"}
              fontWeight={"hairline"}
            >
              Best Choices
            </Heading>
            <Heading
              as={"h2"}
              size={"lg"}
              color={"#1f3e72"}
              fontWeight={"hairline"}
            >
              Popular Residencies
            </Heading>
          </Box>
          <div
            style={{
              padding: "10px",
            }}
          >
            <Swiper>
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  {/* <VStack> */}
                  <Card maxW={"400px"}>
                    <CardHeader>
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Avatar src={item?.image} name={item?.name} />
                        <Box>
                          <Text>{item?.name}</Text>
                        </Box>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Box mb={"10px"}>
                        <Image
                          h={"300px"}
                          w={"350px"}
                          src={item?.image}
                          alt="Photo"
                        />
                      </Box>
                      <Box>
                        <Wrap spacingX={"10px"}>
                          <WrapItem>
                            <Flex gap={"2"}>
                              <CurrencyRupeeIcon />
                              <Text>{item?.price}</Text>
                            </Flex>
                          </WrapItem>
                          <WrapItem>
                            <Box>
                              <Text>{item?.detail}</Text>
                            </Box>
                          </WrapItem>
                        </Wrap>
                      </Box>
                    </CardBody>

                    <Divider />
                    <CardFooter
                      justify="space-between"
                      flexWrap="wrap"
                      sx={{
                        "& > button": {
                          minW: "136px",
                        },
                      }}
                    >
                      <Button
                        flex="1"
                        variant="ghost"
                        leftIcon={<FavoriteBorderIcon />}
                      >
                        Favourites
                      </Button>
                      <Button
                        flex="1"
                        variant="ghost"
                        leftIcon={<ThumbUpOffAltIcon />}
                      >
                        like
                      </Button>
                    </CardFooter>
                  </Card>
                  {/* </VStack> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SwiperResi;
