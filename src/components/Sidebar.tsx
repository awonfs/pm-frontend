import { Box, Flex, Stack, UnorderedList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Project = {
  id: number;
  title: string;
};

function Sidebar({ projects }: { projects: Project[] }) {
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
            {projects.map((project: Project) => (
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
