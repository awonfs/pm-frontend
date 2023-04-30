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
      <Button
        leftIcon={<AddIcon pt={1} />}
        colorScheme="purple"
        variant="solid"
        size={"md"}
        mr={20}
      >
        <Link to="/new-project">Add a new project</Link>
      </Button>
    </Flex>
  );
}

export default Header;
