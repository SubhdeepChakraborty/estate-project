import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Slide,
  TagLabel,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
  useDisclosure,
  useToast,
  Avatar,
  AvatarBadge,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Field, Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useGlobalAreaContext } from "../context/Context";
import MainMenuItem from "./menu/MenuItem";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbar = () => {
  //email
  const formRef = useRef();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    let imageUrl = localStorage.getItem("image");
    let username = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    setName(username);
    setUrl(imageUrl);
    setEmail(email);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = () => {
    console.log("heloooo there");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("image");
  };

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
  // console.log(window.innerWidth);
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
            <Box cursor={"pointer"}>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={name} src={url}>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                  <Heading size="sm">{name}</Heading>
                  <Text>{email}</Text>
                </Box>
              </Flex>
            </Box>
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
                        <Link to="/">
                          <Text fontSize={""} fontWeight={""} className="text">
                            home
                          </Text>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <a href="#About">
                          <Text fontSize={""} fontWeight={""} className="text">
                            About
                          </Text>
                        </a>
                      </WrapItem>
                      <WrapItem>
                        <Link to="/residencies">
                          <Text fontSize={""} fontWeight={""} className="text">
                            residencies
                          </Text>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Flex>
                </div>
                <Button
                  onClick={onToggle}
                  variant={"unstyled"}
                  display={"contents"}
                >
                  Contact
                </Button>
                {/* <Box> */}
                <IconButton
                  mt={"-19px"}
                  mr={"4px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  variant="unstyled"
                  aria-label="See menu"
                  w={"10px"}
                  icon={<RiLogoutCircleRLine />}
                  onClick={handleSubmit}
                />
                {/* </Box> */}
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Slide
        direction="bottom"
        in={isOpen}
        style={{ zIndex: 10, maxWidth: "450px" }}
      >
        <Box
          w={"400px"}
          p="40px"
          height={"-webkit-fit-content"}
          color="white"
          mt="4"
          bg="black"
          rounded="md"
          shadow="md"
        >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box width={"300px"}>
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
                          placeholder="Name"
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
                          placeholder="Email address"
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
                      <Button type="submit" colorScheme="green" w="93%">
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
