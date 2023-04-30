import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import createProject from "../api/createProject";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const navigate = useNavigate();

  async function onSubmit() {
    try {
      await createProject(projectName, projectDescription);
      setProjectName("");
      setProjectDescription("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="gray.500"
        flex={1}
      >
        <Heading my={5}>Create a new project </Heading>
        <FormControl
          display="flex"
          flexDirection="column"
          gap={2}
          isRequired
          width={1 / 5}
        >
          <FormLabel>Project name</FormLabel>
          <Input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project name"
          />
          <FormLabel>Project Description </FormLabel>
          <Input
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Project name"
          />
          <Button
            onClick={onSubmit}
            colorScheme="purple"
            variant="solid"
            size={"md"}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default CreateProject;
