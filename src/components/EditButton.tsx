import { Button, Flex } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const EditButton = () => {
  function handleOnClick() {
    console.log("Edit button clicked");
  }

  return (
    <Button
      _hover={{ bg: "blue.400" }}
      color="whiteAlpha.800"
      fontSize={13}
      bg="blue.500"
      size="xs"
      mt={10}
      px={3}
      py={2}
      onClick={handleOnClick}
    >
      <Flex justifyContent="center" alignItems="center" gap={1}>
        <EditIcon />
        <Link to="/">Edit</Link>
      </Flex>
    </Button>
  );
};

export default EditButton;
