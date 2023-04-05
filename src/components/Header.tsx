import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
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
				<Button colorScheme="purple" variant="solid" size={"md"}>
					<Flex alignItems="center" justifyContent="center" gap={1}>
						<AddIcon boxSize={4} pt={1} />
						<Text>Add a new project</Text>
					</Flex>
				</Button>
			</Box>
		</Flex>
	);
}

export default Header;
