"use client";

import { Box } from "@chakra-ui/react";

import { fetchUser, fetchUsers } from '@/lib/data';
import { useRouter } from "next/navigation";

const DashboardPage =  () => {
  const router = useRouter();


  router.push("/login");
  localStorage.removeItem("token")
  


  return (
    <>
    
    </>
  );
};

export default DashboardPage;
