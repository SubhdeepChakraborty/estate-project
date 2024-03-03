import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import axios from "axios";
import { useGlobalAreaContext } from "../context/Context";

const Login = () => {
  const { allow, setAllow } = useGlobalAreaContext();
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
            rememberMe: false,
          }}
          onSubmit={(values, { setSubmitting }) => {
            let { email, password } = values;
            console.log(email, password);
            axios
              .post(`http://localhost:3000/api/user/users/login&logout`, values)
              .then((response) => {
                console.log("Response:", response);
                // Handle the response as needed
                setAllow(!true);
                const imageData = response?.data?.data?.image;
                localStorage.setItem("email", values.email);
                localStorage.setItem("image", imageData);
                localStorage.setItem("name", response?.data?.data?.name);
              })
              .catch((err) => {
                console.log("Error:", err);
              });
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
            return errors;
          }}
        >
          {({ handleSubmit, errors, touched, isSubmitting }) => (
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
              <Button
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
                w={"93%"}
                colorScheme="green"
              >
                Login
              </Button>
              <Text mt={"20px"} textAlign={"center"}>
                New here ? let's{" "}
                <Link color={"blue.300"} href="/register">
                  register
                </Link>{" "}
                you.
              </Text>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Login;
