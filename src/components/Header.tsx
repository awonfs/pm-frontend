import { AddIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Flex,
  Box,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NewProjectModal from "./NewProjectModal";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        onClick={onOpen}
        colorScheme="purple"
        variant="solid"
        size={"md"}
        mr={20}
      >
        <Flex alignItems="center" justifyContent="center" gap={1}>
          <AddIcon boxSize={4} pt={1} />
          <Text>Add a new project</Text>
        </Flex>
      </Button>
      <NewProjectModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Header;
