import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useEffect, useState } from "react";

export default function App() {
	return (
		<Box>
			<Header />
			<Sidebar />
		</Box>
	);
}
