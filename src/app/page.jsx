import { Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <Box px={["2", "2", "5", "5", "5"]} pl={["2", "2", "5", "12", "12"]}>
        <h1>
          The Homepage: if user session exists in storage, redirect to dashboard{" "}
        </h1>
      </Box>
    </>
  );
};

export default Home;
