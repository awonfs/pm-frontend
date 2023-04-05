import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Project = {
	id: number;
	title: string;
	content: string;
};

export default function Post() {
	const { projectId } = useParams();

	const [project, setProject] = useState<Project>({} as Project);

	//TODO fetch project data based on projectId
	async function getProject() {
		try {
			const response = await fetch(`http://raspberrypi:5000/post/${projectId}`);
			const data = await response.json();
			setProject(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getProject();
	}, [projectId]);

	return (
		<Box bg="gray.500" flex={1}>
			<Flex
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				p={5}
				gap={50}
			>
				<Heading>{project.title}</Heading>
				<Text>{project.content}</Text>
			</Flex>
		</Box>
	);
}
