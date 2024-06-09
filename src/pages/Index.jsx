import { Container, Text, VStack, Box, Heading, Button, Image, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.500">Full Stack Developer</Text>
        </Box>
        <Box textAlign="center" maxW="600px">
          <Text fontSize="md" mb={4}>
            Hi, I'm John Doe, a passionate full stack developer with experience in building web applications using modern technologies. I love to create beautiful and functional websites.
          </Text>
          <Button colorScheme="teal" size="lg" mb={4}>Contact Me</Button>
        </Box>
        <HStack spacing={4}>
          <Link href="https://github.com" isExternal>
            <FaGithub size="30px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="30px" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="30px" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;