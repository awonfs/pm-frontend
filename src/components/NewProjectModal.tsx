import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import createProject from "../api/createProject";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";

function NewProjectModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");

	async function onSubmit() {
		try {
			await createProject(projectName, projectDescription);
			onClose();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add a new project</ModalHeader>
				<ModalCloseButton />
				<ModalBody display="flex" flexDirection="column" gap={2}>
					<Input
						required
						value={projectName}
						onChange={(e) => {
							setProjectName(e.target.value);
						}}
						placeholder="Project name"
					/>
					<Textarea
						required
						value={projectDescription}
						onChange={(e) => {
							setProjectDescription(e.target.value);
						}}
						placeholder="Description"
					/>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onSubmit} colorScheme="blue">
						Submit
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default NewProjectModal;
