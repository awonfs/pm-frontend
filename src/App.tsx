import { Box, Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import getProjects from "./api/getProjects";

export default function App() {
  type Project = {
    id: number;
    title: string;
  };

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, [projects]);

  return (
    <Box>
      <Header />
      <Flex>
        <Sidebar projects={projects} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<Post />} />
        </Routes>
      </Flex>
    </Box>
  );
}
