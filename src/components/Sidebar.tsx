import { Box, Flex, Stack, UnorderedList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
