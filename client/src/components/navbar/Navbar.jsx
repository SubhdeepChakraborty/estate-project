import React, { useRef, useState, useEffect } from "react";
import CottageIcon from "@mui/icons-material/Cottage";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Slide,
  TagLabel,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Field, Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useGlobalAreaContext } from "../context/Context";
import MainMenuItem from "./menu/MenuItem";

const Navbar = () => {
  //email
  const formRef = useRef();
  const toast = useToast();
  const { isOpen, onToggle } = useGlobalAreaContext();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Update the window size whenever the window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhywtxl",
        "template_b3x4gvq",
        formRef.current,
        "nM_OG8yK5TkAIbibU"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Successfully sended.",
            description: "Your message is on its way.",
            position: "top-left",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error occured.",
            description: "Somethng went wrong.",
            status: "error",
            position: "top-left",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  const container = {
    hidden: { opacity: 1, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delayChildren: 0.3,
        // staggerChildren: 0.2,
        ease: "easeIn",
      },
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <Box
        height={"-moz-max-content"}
        color={"whiteAlpha.900"}
        background={"black"}
      >
        <Box
          p={"2.5"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{
            base: "row-reverse",
            md: "unset",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Text>
              <CottageIcon sx={{ fontSize: 40 }} />
            </Text>
            <Text fontWeight={""} fontSize={"sm"} className="Home-image">
              H-Estate
            </Text>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            {windowSize.width <= 425 ? (
              <div>
                <MainMenuItem />
              </div>
            ) : (
              <>
                <div>
                  <Flex alignContent={"center"} justifyContent={"center"}>
                    <Wrap spacing={"3.5"} mr={"3"}>
                      <WrapItem>
                        <Link href="/">
                          <Text fontSize={""} fontWeight={""}>
                            Home
                          </Text>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="/residencies">
                          <Text fontSize={""} fontWeight={""}>
                            Residencies
                          </Text>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="/started">
                          <Text fontSize={""} fontWeight={""}>
                            Get Started
                          </Text>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="/value">
                          <Text fontSize={""} fontWeight={""}>
                            Prize
                          </Text>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Flex>
                </div>
                <Button onClick={onToggle} variant={"unstyled"}>
                  Contact
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          height={"-webkit-fit-content"}
          color="white"
          mt="4"
          bg="#040D12"
          rounded="md"
          shadow="md"
        >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box width={"700px"}>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={sendEmail} ref={formRef}>
                    <VStack spacing={4} align={"flex-start"}>
                      <FormControl>
                        <Field
                          as={Input}
                          id="name"
                          name="name"
                          type="text"
                          variant="flushed"
                          placeholder="name"
                        />
                      </FormControl>
                      <FormControl>
                        {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="flushed"
                          placeholder="email address"
                        />
                      </FormControl>
                      <FormControl>
                        {/* <FormLabel htmlFor="message">Message</FormLabel> */}
                        <Field
                          as={Textarea}
                          id="message"
                          name="message"
                          type="message"
                          variant="flushed"
                          placeholder="What's on your mind.."
                        />
                      </FormControl>
                      <Button type="submit" colorScheme="green" w="full">
                        Send
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default Navbar;
