"use client";

import Login from "@/components/auth/login/login";
import SignUp from "@/components/auth/signUp/signUp";

import {
  FormLabel,
  Input,
  HStack,
  VStack,
  Button,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
const LogInSignUpPage = ({ params }) => {
  const [login, setLogin] = useState();
  console.log(params.slug);
  return (
    <>
      <Box px={["2", "2", "5", "5", "5"]} pl={["2", "2", "5", "12", "12"]}>
        <Box
          h={"100%"}
          rounded={"xl"}
          px={["0px", "20px", "20px", "30px", "30px"]}
          py={10}
        >
          <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
            <Text
              fontSize={["36", "36", "36", "46", "46"]}
              fontWeight={"700"}
              textAlign={"center"}
            >
              {login ? "Login" : "Create an account"}
            </Text>
            <Text
              fontSize={["18", "18", "18", "20", "20"]}
              fontWeight={"300"}
              textAlign={"center"}
              as={"span"}
            >
              {!login ? "Have an Account" : "Don't have an Account"}
              <Text
                color={"green.400"}
                cursor={"pointer"}
                as={"span"}
                fontWeight={"500"}
                onClick={() => setLogin(!login)}
              >
                {" "}
                {!login ? "Login" : "Sign Up"}
              </Text>
            </Text>

            {login ? <Login /> : <SignUp />}
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default LogInSignUpPage;
