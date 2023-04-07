import { Button, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import deleteProject from "../api/deleteProject";

type DeleteButtonProps = {
  projectId: number;
};
const DeleteButton = ({ projectId }: DeleteButtonProps) => {
  async function handleDelete() {
    try {
      await deleteProject(projectId);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button
      _hover={{ bg: "red.400" }}
      color="whiteAlpha.800"
      bg="red.500"
      size="xs"
      onClick={handleDelete}
    >
      <Flex justifyContent="center" alignItems="center" gap={1}>
        <DeleteIcon />
        Delete
      </Flex>
    </Button>
  );
};

export default DeleteButton;
