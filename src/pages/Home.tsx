import { Box, Flex, Heading } from "@chakra-ui/react";

function Home() {
  return (
    <Box bg="gray.500" flex={1}>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={5}
        gap={50}
      >
        <Heading>Home</Heading>
      </Flex>
    </Box>
  );
}

export default Home;
