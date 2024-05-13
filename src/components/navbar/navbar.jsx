import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";



const Navbar = () => {

    const links = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: "dashboard",

        },
        {
            name: "Login",
            link: "/login",
            icon: "login",
            
        },
        {
            name: "landing",
            link: "/",
            icon: "landing",
        }
        
    ]
  return (
    <>
      <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Box
            bg={"white"}
            rounded={"xl"}
            shadow={"xl"}
            w={["100%", "100%", "100%", "85%", "70%"]}
            h={"75px"}
            px={"14"}
          >
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"center"}
              align={"center"}
              gap={["20px", "30px", "40px", "50px", "50px"]}
              fontFamily={"Raleway"}
            >
         

             


{links.map(({name, link, icon}) => (
    
<Link href={link} key={name}>
<Text

              
transition={"all 0.3s ease-in-out"}
cursor={"pointer"}
_hover={{
 transform: "scale(1.2)",

}}

whiteSpace={"nowrap"}
fontSize={["12px", "12px", "14px", "16px", "16px"]}
fontWeight={600}
>
{name}
</Text>  </Link>
))}

              

            
           
            </HStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
