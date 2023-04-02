import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Post() {
	return (
		<Box bg="gray.500" flex={1}>
			<Flex
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				p={5}
				gap={50}
			>
				<Heading>Post title</Heading>
				<Text>Post content</Text>
			</Flex>
		</Box>
	);
}
