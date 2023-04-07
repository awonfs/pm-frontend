import { Box, Flex, Heading, Container } from "@chakra-ui/react";
import DeleteButton from "./DeleteButton";
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
				<Flex
					alignItems="center"
					justifyContent="center"
					flexDirection="column"
					gap={2}
				>
					<DeleteButton projectId={project.id} />
					<Heading cursor="pointer" size="2xl" borderBottom="2px">
						{project.title}
					</Heading>
				</Flex>
				<Container textAlign="start" color="blackAlpha.900">
					{project.content}
				</Container>
			</Flex>
		</Box>
	);
}
