import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Button,
  Text,
  Link,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Avatar,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Field, Formik } from "formik";
import { storage, db } from "../../functions"; // Assuming functions/index.js exports storage and db
import { doc, setDoc } from "firebase/firestore";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  return (
    <Flex
      mt={"0"}
      bg={"gray.100"}
      height={"100vh"}
      width={"100vw"}
      position={"absolute"}
      align={"center"}
      justify={"center"}
      zIndex={1}
    >
      <Box bg={"white"} rounded={"md"} p={6} width={"350px"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            image: null,
            rememberMe: false,
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            try {
              console.log(isSubmitting, "ssssssssssssssssubmit");
              const { email, password, name } = values;

              // Simulating form submission delay
              setTimeout(() => {
                // alert(values);
                setSubmitting(true);
              }, 400);
              console.log(isSubmitting, "ssssssssssssssssubmit");

              const storageRef = ref(storage, "images/" + imageFile.name);
              const uploadTask = uploadBytesResumable(storageRef, imageFile);

              // Listen for state changes, errors, and completion of the upload.
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                  }
                },
                (error) => {
                  // Handle errors during upload
                  console.error(error);
                },
                () => {
                  // Upload completed successfully, now we can get the download URL
                  getDownloadURL(uploadTask.snapshot.ref).then(
                    async (downloadURL) => {
                      console.log("File available at", downloadURL);
                      // Here you can save the download URL to the database or do other tasks
                      values.image = downloadURL;
                      console.log(values, "Here the data.");
                      const { rememberMe, ...data } = values;
                      const userData = {
                        ...data,
                      };
                      axios
                        .post(
                          "http://localhost:3000/api/user/register",
                          userData
                        )
                        .then(() => {
                          console.log("Successfully registered.");
                          toast({
                            title: "Successfully registered.",
                            description: " Account created successfully.",
                            status: "success",
                            duration: 3000,
                            position: "top-left",
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                          toast({
                            title: "Try again later.",
                            description:
                              "Something went wrong.Try again later.",
                            status: "error",
                            duration: 4000,
                            position: "top-left",
                          });
                        });
                      navigate("/");
                    }
                  );
                }
              );
            } catch (err) {
              console.error(err);
              // Handle error
            }
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password should be at least 6 characters";
            }
            if (!values.name) {
              errors.name = "Required";
            }
            return errors;
          }}
        >
          {({ handleSubmit, errors, touched, isSubmitting, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  as={Input}
                  variant="filled"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password && touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  variant="filled"
                  as={Input}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.name && touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  id="name"
                  type="name"
                  name="name"
                  variant="filled"
                  as={Input}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  flexDirection={"column"}
                >
                  <Box ml={""} w={"full"}>
                    <FormControl isInvalid={errors.image && touched.image}>
                      <FormLabel htmlFor="file" mt={"15px"} cursor={"pointer"}>
                        <HStack spacing={4}>
                          {["lg"].map((size) => (
                            <Tag
                              size={size}
                              key={size}
                              w={"full"}
                              variant="subtle"
                              colorScheme="green"
                            >
                              <TagLeftIcon boxSize="12px" as={AddIcon} />
                              <TagLabel>Image</TagLabel>
                            </Tag>
                          ))}
                        </HStack>
                      </FormLabel>
                      <Input
                        id="file"
                        type="file"
                        name="image"
                        variant="filled"
                        display="none"
                        onChange={(e) => {
                          setImageFile(e.target.files[0]);
                          setFieldValue("image", e.target.files[0].name);
                        }}
                      />
                      <FormErrorMessage>{errors.image}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <div
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    <Field
                      as={Checkbox}
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme={"green"}
                    >
                      Remember me?
                    </Field>
                  </div>
                </Box>
                <Box
                  w={"160px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Avatar
                    name="Profile Picture"
                    src={
                      imageFile
                        ? URL.createObjectURL(imageFile)
                        : "https://bit.ly/dan-abramov"
                    }
                  />
                </Box>
              </Box>
              <Button
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
                w={"93%"}
                colorScheme="green"
              >
                Register
              </Button>
              <Text mt={"20px"} textAlign={"center"}>
                Already registered?{" "}
                <Link color={"blue.300"} href="/">
                  Login here
                </Link>
              </Text>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Register;
