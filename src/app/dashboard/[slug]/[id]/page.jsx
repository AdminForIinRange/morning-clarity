

import React from "react";
import { fetchUser, fetchUserByUsername, fetchUsers } from "@/lib/data";
import { VStack, Text } from "@chakra-ui/react";
import DisplayUsersProfile from "@/components/displayUserProfile/displayUsersProfile";

const GrabUsers = async ({ params }) => {
  console.log(params.id);
  // const user = await fetchUser(params.slug)
  const id = params.id;

  return (
    <>
     <DisplayUsersProfile  id={id} />
    </>
  );
};

export default GrabUsers;
