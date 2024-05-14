import React from "react";
import { fetchUser, fetchUserByUsername, fetchUsers } from "@/lib/data";
import { VStack, Text } from "@chakra-ui/react";

const GrabUsers = async ({ params }) => {
  console.log(params.slug);
  // const user = await fetchUser(params.slug)
  const userByUsername = await fetchUserByUsername(params.slug);

  return (
    <div>
      <text>
        <VStack mt={10}>
          <Text>{userByUsername.username}</Text>

          <Text>{userByUsername.id}</Text>
          <Text>{userByUsername.password}</Text>

          <Text>{userByUsername.email}</Text>
        </VStack>
      </text>
    </div>
  );
};

export default GrabUsers;
