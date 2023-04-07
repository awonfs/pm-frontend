import { Box, Flex, Heading, Container } from "@chakra-ui/react";
import DeleteButton from "./DeleteButton";
import getProject from "../api/getProject";
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

	useEffect(() => {
		async function fetchProject() {
			const data = await getProject(String(projectId));
			setProject(data);
		}
		fetchProject();
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
