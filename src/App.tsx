import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Post from "./components/Post";
import { useEffect, useState } from "react";

export default function App() {
	return (
		<Box>
			<Header />
			<Flex>
				<Sidebar />
				<Post />
			</Flex>
		</Box>
	);
}
