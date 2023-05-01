import { Button, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import deleteProject from "../api/deleteProject";
import { useContext } from "react";
import { ReloadContext } from "./Sidebar";
import { Link } from "react-router-dom";

type DeleteButtonProps = {
  projectId: number;
};

const DeleteButton = ({ projectId }: DeleteButtonProps) => {
  const { setReload } = useContext(ReloadContext);

  async function handleDelete() {
    try {
      await deleteProject(projectId);
      setReload(true);
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
      mt={10}
      onClick={handleDelete}
    >
      <Flex justifyContent="center" alignItems="center" gap={1}>
        <DeleteIcon />
        <Link to="/">Delete</Link>
      </Flex>
    </Button>
  );
};

export default DeleteButton;
