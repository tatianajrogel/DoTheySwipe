import { Box, Flex, Text } from "@chakra-ui/react";

const TestimonialCard = ({ name, text, role }) => (
  <Box
    bg="white"
    rounded="2xl"
    p={8}
    shadow="lg"
    _hover={{ shadow: "xl" }}
    transition="all 0.3s"
  >
    <Flex justify="center" mb={4} gap={1}>
      {[...Array(5)].map((_, i) => (
        <Text key={i} fontSize="2xl" color="yellow.400">✰</Text>
      ))}
    </Flex>

    <Text color="gray.700" fontSize="lg" fontStyle="italic" textAlign="center" mb={6}>
      "{text}"
    </Text>

    <Box textAlign="center">
      <Text fontWeight="semibold" color="gray.900">{name}</Text>
      {role && <Text fontSize="sm" color="gray.600">{role}</Text>}
    </Box>
  </Box>
);

export default TestimonialCard;
