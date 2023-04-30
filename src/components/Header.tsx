import { AddIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex
      bg={"gray.600"}
      py={3}
      borderBottom="1px"
      borderColor="gray.300"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box ml={190}>
        <Heading as={"h1"} size={"lg"} color={"white"}>
          <Link to="/">Project Manager</Link>
        </Heading>
      </Box>
      <Button colorScheme="purple" variant="solid" size={"md"} mr={20}>
        <Flex alignItems="center" justifyContent="center" gap={1}>
          <AddIcon boxSize={4} pt={1} />
          <Link to="/new-project">Add a new project</Link>
        </Flex>
      </Button>
    </Flex>
  );
}

export default Header;
