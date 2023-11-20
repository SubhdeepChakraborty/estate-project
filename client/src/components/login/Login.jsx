import React from "react";
import {
  Box,
  Flex,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

const Login = () => {
  return (
    <Flex
      bg={"gray.100"}
      height={"100vh"}
      width={"100vw"}
      position={"absolute"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={100}
    >
      <Box bg={"white"} rounded={"md"} p={6} width={"350px"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400); // Simulating form submission delay
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
              <VStack spacing={4} align={"flex-start"} justify={"flex-start"}>
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
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme={"green"}
                >
                  Remember me?
                </Field>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  w={"full"}
                  colorScheme="green"
                  paddingLeft={0}
                >
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Login;
