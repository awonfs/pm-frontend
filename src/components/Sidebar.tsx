import { Box, Flex, Stack, UnorderedList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getProjects from "../api/getProjects";

type Project = {
  id: number;
  title: string;
};

function Sidebar() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <Box
      height={"100vh"}
      p={10}
      bg="gray.600"
      borderRight="1px"
      borderColor="gray.300"
    >
      <Flex>
        <Stack>
          <UnorderedList>
            {projects.map((project) => (
              <Text color="gray.200" key={project.id}>
                <Link key={project.id} to={`/projects/${project.id}`}>
                  {project.title}
                </Link>
              </Text>
            ))}
          </UnorderedList>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Sidebar;
