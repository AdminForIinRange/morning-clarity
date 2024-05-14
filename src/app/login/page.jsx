
import SignUp from "@/components/auth/signUp/signUp";
import { Box } from "@chakra-ui/react";
const LogInSignUpPage = ({ params }) => {
  console.log(params.slug);
  return (
    <>
      <Box px={["2", "2", "5", "5", "5"]} pl={["2", "2", "5", "12", "12"]} >


        <SignUp />
      </Box>
    </>
  );
};

export default LogInSignUpPage;
