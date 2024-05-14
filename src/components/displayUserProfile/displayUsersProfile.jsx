

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

const DisplayUsersProfile = async ({  userByUsername }) => {
  return (
    <>
      <VStack>
        <Text>{userByUsername.username}</Text>
        {userByUsername.performance_data.map((data, index) => (
  <div key={index}>
    <p>{data.date}</p>
    <p>{data}</p>
  </div>
))}

           

        <Text>
            Show all Progress
            
        </Text>

      </VStack>
    </>
  );
};

export default DisplayUsersProfile;
