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
import { fetchUser, fetchUserByUsername, fetchUsers } from "@/lib/data";
import { addDailyTaskCompleted } from "@/lib/actions";

const DisplayUsersProfile = ({ id, userByUsername }) => {
  const boxes = [
    {
      title: "Daily",
      subheading: "Quick Fire Rounds",
      bgGradient: "linear(to-tl, #FF8888, #FFBA88, #EEFF88)",
    },
    {
      title: "Anytime",
      subheading: "Quick Fire Rounds",
      bgGradient: "linear(to-tl, #FF8888, #FF88CF, #BC88FF)",
    },
  ];

  const boxesTwo = [
    {
      title: "Practice",
      subheading: "Quick Fire Rounds",
      bgGradient: "linear(to-tl, #BC88FF, #A088FF, #E088FF)",
    },
    {
      title: "In Progress",
      subheading: "Quick Fire Rounds",
      bgGradient: "linear(to-tl, #EEFF88, #E088FF, #FF88CF)",
    },
  ];

  const ChartBox = [
    {
      title: "Progress",
    },

    {
      title: "Accuracy",
    },

    {
      title: "Something",
    },
  ];

  // addDailyTaskCompleted(id, new Date(), 20, 1223230);

  return (
    <>
      <VStack w={"100%"} h={"100%"} p={"10"}>
        <HStack
          w={"100%"}
          h={"100%"}
          justify={"center"}
          align={"start"}
          flexWrap={"wrap"}
          wrap={"wrap"}
          transition={"all 0.5s ease-in-out"}
        >
          <VStack
            transition={"all 0.5s ease-in-out"}
            justify={"center"}
            align={"center"}
            h={"100%"}
            fontFamily={"raleway"}
          >
            {boxes.map(({ title, subheading, bgGradient }, index) => (
              <>
                <Box
                  transition={"all 0.5s ease-in-out"}
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

                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      <Text w={"70%"} fontWeight={"bold"} fontSize={"30"}>
                        {subheading}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </>
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
            {boxesTwo.map(({ title, subheading, bgGradient }, index) => (
              <>
                <Box
                  transition={"all 0.5s ease-in-out"}
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

                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      <Text w={"70%"} fontWeight={"bold"} fontSize={"30"}>
                        {subheading}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </>
            ))}
          </VStack>

          <HStack
            justify={"center"}
            align={"center"}
            h={"100%"}
            fontFamily={"raleway"}
          >
            {" "}
            <Box bgColor={"blue.200"} rounded={"xl"} w={"500px"} h={"505px"}>
              <VStack
                w={"100%"}
                h={"100%"}
                justify={"top"}
                align={"start"}
                textColor={"white"}
              >
                <HStack>
                  <Text w={"100%"} fontWeight={"bold"} fontSize={"30"}></Text>
                </HStack>

                <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                  <Text w={"70%"} fontWeight={"bold"} fontSize={"30"}></Text>
                </HStack>
              </VStack>
            </Box>
          </HStack>
        </HStack>

        <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Box
            w={"1110px"}
            h={"300px"}
            bgColor={"green.200"}
            rounded={"xl"}
            p={"5"}
          >
            <HStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
              {ChartBox.map(({ title }, index) => (
                <Box
                  key={index}
                  w={"12%"}
                  h={"40px"}
                  bgColor={"green.400"}
                  rounded={"xl"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                    fontFamily={"raleway"}
                    cursor={"pointer"}
                    transition={"all 0.3s ease-in-out"}
                    _hover={{ bgColor: "green.500" }}
                  >
                    <Text color={"white"} fontWeight={"bold"} fontSize={"14"}>
                      {title}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};

export default DisplayUsersProfile;

{
  /* <VStack>
        <Text>{userByUsername.username}</Text>

     
        {userByUsername.performance_data.daily_tasks.map((task, index) => (
              <Box key={index} mt="2">
                <Text>Date: {new Date(task.date).toLocaleDateString()}</Text>
                <Text>Completed: {task.daily_tasks_completed ? "Yes" : "No"}</Text>
                <Text>Accuracy: {task.accuracy}%</Text>
                <Text>Points: {task.points}</Text>
              </Box>
            ))}
        
      </VStack> */
}
