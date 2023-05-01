import { Box, Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Post from "./pages/Post";
import CreateProject from "./pages/CreateProject";
import { Route, Routes } from "react-router-dom";
import { ReloadContext } from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [reload, setReload] = useState(false);
  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      <Box>
        <Header />
        <Flex>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<Post />} />
            <Route path="/new-project" element={<CreateProject />} />
          </Routes>
        </Flex>
      </Box>
    </ReloadContext.Provider>
  );
}
