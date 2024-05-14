"use client";

import React from "react";

import { VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const GrabUsersPage = ({ params }) => {
  const router = useRouter();

  router.push("/login");
  localStorage.removeItem("token");

  return (
    <div>
      <text>
        <VStack mt={10}></VStack>
      </text>
    </div>
  );
};

export default GrabUsersPage;
