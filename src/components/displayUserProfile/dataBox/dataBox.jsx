
"use client";
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
const DataBox = ({checking}) => {
  return (
    <>
    
    <HStack
            justify={"center"}
            align={"center"}
            h={"100%"}
            fontFamily={"raleway"}
            ml={"1"}
          >
            <Box bgColor={"blue.200"} rounded={"xl"} w={"500px"} h={"513px"}>
              <VStack
                w={"100%"}
                h={"100%"}
                justify={"top"}
                align={"start"}
                textColor={"white"}
                p={"5"}
              >
                {checking}

                <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                  <Text w={"70%"} fontWeight={"bold"} fontSize={"30"}></Text>
                </HStack>
              </VStack>
            </Box>
          </HStack></>
  )
}

export default DataBox