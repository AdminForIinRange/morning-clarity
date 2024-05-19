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
import Chart from "../chart/chart";

const DisplayUsersProfile = async ({ id, userByUsername }) => {
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

  const dailyTasks = userByUsername.performance_data.daily_tasks;

  // Create an object to hold the data
  const tasksData = dailyTasks.map(task => ({
    date: task.date,
    daily_tasks_completed: task.daily_tasks_completed,
    accuracy: task.accuracy,
    points: task.points,
  }));

  // Function to add a daily task if not already completed today
  const addDailyTaskIfNotExists = async () => {
    try {
      const today = new Date();
      let todayDate = today.toISOString().substring(0, 10);

      const hasTaskForToday = dailyTasks.some(task => 
        (typeof task.date === 'string' ? task.date : task.date.toISOString()).substring(0, 10) === todayDate
      );

      if (hasTaskForToday) {
        console.log("User has already completed a task today.");
        return (<HStack>
                  <Text w={"100%"} fontWeight={"bold"} fontSize={"30"}>User has already completed a task today.</Text>
                </HStack>
        )}

      await addDailyTaskCompleted(id, today, 20, 119730);
      console.log("Daily task added successfully.");
      return (<> <Text>DONE</Text>
      </>)
    } catch (error) {
      console.error("Error adding daily task:", error);
    }
  };

  // Call the function to add the daily task
  const checking = await addDailyTaskIfNotExists();

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
            ))}
          </VStack>

          <HStack
            justify={"center"}
            align={"center"}
            h={"100%"}
            fontFamily={"raleway"}
          >
            <Box bgColor={"blue.200"} rounded={"xl"} w={"500px"} h={"505px"}>
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
          </HStack>
        </HStack>
        

        <Chart userName={userByUsername.username} tasksData={tasksData} />

        <VStack>
          <Text>{userByUsername.username}</Text>
        </VStack>
      </VStack>
    </>
  );
};

export default DisplayUsersProfile;
