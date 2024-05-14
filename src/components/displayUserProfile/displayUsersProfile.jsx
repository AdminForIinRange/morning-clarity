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

const DisplayUsersProfile = async ({ id }) => {
  const userByUsername = await fetchUserByUsername(id);

  return (
    <>
      <VStack>
        <Text>{userByUsername.username}</Text>

     
        {userByUsername.performance_data.daily_tasks.map((task, index) => (
              <Box key={index} mt="2">
                <Text>Date: {new Date(task.date).toLocaleDateString()}</Text>
                <Text>Completed: {task.daily_tasks_completed ? "Yes" : "No"}</Text>
                <Text>Accuracy: {task.accuracy}%</Text>
                <Text>Points: {task.points}</Text>
              </Box>
            ))}
        
      </VStack>
    </>
  );
};

export default DisplayUsersProfile;
