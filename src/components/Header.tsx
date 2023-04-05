import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spacer,
	Text,
	useDisclosure,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");

	async function onSubmit() {
		try {
			const response = await fetch("http://raspberrypi:5000/post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: projectName,
					content: projectDescription,
				}),
			});
			console.log(response);
			location.reload();
			onClose();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Flex
			bg={"gray.600"}
			py={3}
			borderBottom="1px"
			borderColor="gray.300"
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Box ml={190}>
				<Heading as={"h1"} size={"lg"} color={"white"}>
					<Link to="/">Project Manager</Link>
				</Heading>
			</Box>
			<Spacer />
			<Box mr={10}>
				<Button
					onClick={onOpen}
					colorScheme="purple"
					variant="solid"
					size={"md"}
				>
					<Flex alignItems="center" justifyContent="center" gap={1}>
						<AddIcon boxSize={4} pt={1} />
						<Text>Add a new project</Text>
					</Flex>
				</Button>
				{isOpen ? (
					<Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
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
				) : null}
			</Box>
		</Flex>
	);
}

export default Header;
