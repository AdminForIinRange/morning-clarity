import React from "react";
import { fetchUser, fetchUserByUsername, fetchUsers } from "@/lib/data";
import { VStack, Text } from "@chakra-ui/react";
import DisplayUsersProfile from "@/components/displayUserProfile/displayUsersProfile";
import Chart from "@/components/chart/chart";

const GrabUsers = async ({ params }) => {
  console.log(params.id);
  // const user = await fetchUser(params.slug)
  const id = params.id;
  const userByUsername = await fetchUserByUsername(id);

  const ConditionallyRender = () => {
    if (!userByUsername) {
      return <div>No user</div>;
    }
  };

  return (
    <>
      {!userByUsername ? (
        <ConditionallyRender />
      ) : (
        <>
          <DisplayUsersProfile
            id={id}
          
            userByUsername={userByUsername}
          />
        </>
      )}
    </>
  );
};

export default GrabUsers;
