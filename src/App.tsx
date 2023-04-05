import { Box, Flex } from "@chakra-ui/react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<Box>
			<Header />
			<Flex>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects/:projectId" element={<Post />} />
				</Routes>
			</Flex>
		</Box>
	);
}
