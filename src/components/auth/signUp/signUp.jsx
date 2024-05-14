


import {
  FormLabel,
  Input,
  HStack,
  VStack,
  Checkbox,
  Button,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";

import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
const SignUp = () => {

  return (
    <>
      {" "}
      <Box
        h={"100%"}
       
        rounded={"xl"}
        px={["20px", "20px", "20px", "30px", "30px"]}
        py={10}
      >
        <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
          <Text
            fontSize={["26", "36", "36", "46", "46"]}
            fontWeight={"700"}
            textAlign={"center"}
          >
            Create an account
          </Text>
          <Text
            fontSize={["16", "18", "18", "20", "20"]}
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

          <Box
            px={5}
            py={5}
            mt={"25px"}
            w={["330px", "400px", "400px", "500px", "500px"]}
            h={"100%"}
            rounded={"xl"}
            boxShadow={"0 1px 5px gray"}
            align={"left"}
          >

<FormLabel htmlFor="email"> Username</FormLabel>
            <Input
              id="username"
              type="username"
              w={"100%"}
              autoComplete="username"
              required
            />

            <FormLabel htmlFor="email"> Email</FormLabel>
            <Input
              id="email"
              type="email"
              w={"100%"}
              autoComplete="current-email"
              required
            />

            <FormLabel mt={"20px"} htmlFor="password">
              password
            </FormLabel>
            <Input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              style={{ width: "100%" }}
            ></Input>

            <FormLabel mt={"20px"} htmlFor="password">
              Retype password
            </FormLabel>
            <Input
              id="rePassword"
              type="password"
              required
              autoComplete="current-password"
              w={"100%"}
            />

            <HStack mt={"15px"} justify="space-between">
              <Checkbox>Remember me</Checkbox>
            </HStack>

            <Button colorScheme="whatsapp" mt={"20px"} w={"100%"} type="submit">
              Sign Up
            </Button>

            <HStack mt={"20px"}>
              <Divider />
              <Text whiteSpace="nowrap" color="fg.muted">
                Or
              </Text>
              <Divider />
            </HStack>
            <HStack
              mt={"15px"}
              justify={"center"}
              align={"center"}
              mb={"20px"}
              gap={"10px"}
            >
              <Button colorScheme="whatsapp" w={"20%"}>
                <FaGoogle color="white" size={"20px"} />
              </Button>
              {/* allowed btn to be an anchor */}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SignUp;
