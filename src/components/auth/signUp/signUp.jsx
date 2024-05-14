"use client";

import { addUser } from "@/lib/actions";
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

import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const router = useRouter();
  const [username, setUsername] = useState(""); // State to hold the username




  useEffect(() => {
    localStorage.setItem("username", username);
    console.log(username);

    state?.success && router.push(`/dashboard/${username}`);
  }, [state?.success, router, username]);


  return (
    <>
      {" "}
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
            Create an account
          </Text>
          <Text
            fontSize={["18", "18", "18", "20", "20"]}
            fontWeight={"300"}
            textAlign={"center"}
            as={"span"}
          >
            Have an Account
            <Text
              color={"green.400"}
              cursor={"pointer"}
              as={"span"}
              fontWeight={"500"}
            >
              {" "}
              Login?{" "}
            </Text>
          </Text>

          <Text
            fontSize={["18", "18", "18", "20", "20"]}
            fontWeight={"300"}
            textAlign={"center"}
            as={"span"}
          >
            {state?.error}
          </Text>

          <Box
            px={[5, 8, 8, 8, 8]}
            py={5}
            mt={"25px"}
            w={["100%", "500px", "500px", "500px", "500px"]}
            h={"100%"}
            rounded={"xl"}
            shadow={["none", "xl", "xl", "xl", "xl"]}
            align={"left"}
          >
            <VStack justify={"center"} align={"left"} gap={"13px"}>
              <form
                action={formAction}
               
              >
                <FormLabel htmlFor="username" fontWeight={"500"}>
                  {" "}
                  Username
                  <Input
                    name="username"
                    mt={"9px"}
                    id="username"
                    type="text"
                    w={"100%"}
                    autoComplete="username"
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormLabel>
                <FormLabel htmlFor="email" fontWeight={"500"}>
                  {" "}
                  Email
                  <Input
                    name="email"
                    mt={"9px"}
                    id="email"
                    type="email"
                    w={"100%"}
                    autoComplete="current-email"
                    required
                    placeholder="Email"
                  />
                </FormLabel>
                <FormLabel htmlFor="password" fontWeight={"500"}>
                  Password
                  <Input
                    name="password"
                    mt={"9px"}
                    id="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    style={{ width: "100%" }}
                    placeholder="Password"
                  />
                </FormLabel>

                <Button
                  colorScheme="whatsapp"
                  w={"100%"}
                  type="submit"
                  mt={"20px"}
                >
                  Sign Up
                </Button>
              </form>
              <HStack>
                <Divider />
                <Text whiteSpace="nowrap" color="fg.muted">
                  Or
                </Text>
                <Divider />
              </HStack>
              <HStack
                mt={"5px"}
                justify={"center"}
                align={"center"}
                mb={"5px"}
                gap={"10px"}
              >
                <Button colorScheme="whatsapp" w={"20%"}>
                  <FaGoogle color="white" size={"20px"} />
                </Button>
                {/* allowed btn to be an anchor */}
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SignUp;
