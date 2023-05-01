import React from "react";
import { Box, UnorderedList, Text } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import getProjects from "../api/getProjects";

type Project = {
  id: number;
  title: string;
};

type ReloadContextType = {
  reload: boolean;
  setReload: (value: boolean) => void;
};

export const ReloadContext = React.createContext<ReloadContextType>({
  reload: false,
  setReload: () => {},
});

function Sidebar() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { reload, setReload } = useContext<ReloadContextType>(ReloadContext);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);

      // Reset the reload state after fetching the data
      setReload(false);
    }

    fetchProjects();
  }, [reload, setReload]);

  return (
    <Box
      height={"100vh"}
      p={10}
      bg="gray.600"
      borderRight="1px"
      borderColor="gray.300"
    >
      <UnorderedList pr={5}>
        {projects.map((project: Project) => (
          <Text color="gray.200" key={project.id}>
            <Link key={project.id} to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </Text>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Sidebar;
