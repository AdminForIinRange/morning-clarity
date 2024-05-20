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
const Taskbox = () => {

    const boxes = [
        {
          title: "Daily",
          subheading: "Quick Fire Rounds",
          bgGradient: "linear(to-tl, #FF8888, #FFBA88, #EEFF88)",
          boxShadow: "#FEBF88"
        },
        {
          title: "Anytime",
          subheading: "Quick Fire Rounds",
          bgGradient: "linear(to-tl, #FF8888, #FF88CF, #BC88FF)",
          boxShadow: "#FF88CF"
        },
      ];
    
      const boxesTwo = [
        {
          title: "Practice",
          subheading: "Quick Fire Rounds",
          bgGradient: "linear(to-tl, #BC88FF, #A088FF, #E088FF)",
          boxShadow: "#A088FF"
        },
        {
          title: "In Progress",
          subheading: "Quick Fire Rounds",
          bgGradient: "linear(to-tl, #EEFF88, #E088FF, #FF88CF)",
          boxShadow: "#E088FF"
        },
      ];
  return (
    <>

<VStack
            transition={"all 0.3s ease-in-out"}
            justify={"center"}
            align={"center"}
            h={"100%"}
            fontFamily={"raleway"}


          >
            {boxes.map(({ title, subheading, bgGradient, boxShadow}, index) => (
              <Box
         
              m={"0.5"}
                cursor={"pointer"}
                _hover={{ transform: "scale(1.02)" , boxShadow: `0 0 50px 0 ${boxShadow}` }}
                transition={"all 0.3s ease-in-out"}
              
                key={index}
                p={"5"}
                bgGradient={bgGradient}
                rounded={"xl"}
                w={"300px"}
                h={"250px"}
              >
                <VStack
                  w={"100%"}
                  h={"100%"}
                  justify={"top"}
                  align={"start"}
                  textColor={"white"}
                >
                  <HStack>
                    <Text w={"100%"} fontWeight={"bold"} fontSize={"30"}>
                      {title}
                    </Text>
                  </HStack>

                  <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                    <Text w={"70%"} fontWeight={"bold"} fontSize={"30"}>
                      {subheading}
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </VStack>

          <VStack
            transition={"all 0.5s ease-in-out"}
            justify={"center"}
            align={"center"}
            h={"100%"}
            wrap={"wrap"}
            flexWrap={"wrap"}
            fontFamily={"raleway"}
 

          >
            {boxesTwo.map(({ title, subheading, bgGradient , boxShadow}, index) => (
              <Box
              m={"0.5"}
                cursor={"pointer"}
                _hover={{ transform: "scale(1.02)" , boxShadow: `0 0 50px 0 ${boxShadow}` }} 
                transition={"all 0.3s ease-in-out"}
                key={index}
                p={"5"}
                bgGradient={bgGradient}
                rounded={"xl"}
                w={"300px"}
                h={"250px"}
              >
                <VStack
                  w={"100%"}
                  h={"100%"}
                  justify={"top"}
                  align={"start"}
                  textColor={"white"}
                >
                  <HStack>
                    <Text w={"100%"} fontWeight={"bold"} fontSize={"30"}>
                      {title}
                    </Text>
                  </HStack>

                  <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                    <Text w={"70%"} fontWeight={"bold"} fontSize={"30"}>
                      {subheading}
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </VStack>
    </>
  )
}

export default Taskbox