import { Box, Flex, Stack, UnorderedList, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Project = {
	id: number;
	title: string;
};

function Sidebar() {
	const [projects, setProjects] = useState<Project[]>([]);

	async function getProjects() {
		try {
			const response = await fetch("http://raspberrypi:5000/posts");
			const data = await response.json();
			console.log(data);
			setProjects(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getProjects();
	}, []);
	return (
		<Box height={"100vh"} width={"10%"} p={10} bg="gray.600">
			<Flex>
				<Stack>
					<UnorderedList>
						{projects.map((project) => (
							<ListItem key={project.id}>{project.title}</ListItem>
						))}
					</UnorderedList>
				</Stack>
			</Flex>
		</Box>
	);
}

export default Sidebar;
