import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Testimonial = () => (
  <Box as="section" py={16} px={4} bg="pink.100">
    <Flex direction={{ base: "column", md: "row" }} maxW="6xl" mx="auto" gap={8}>
      {/* Header */}
      <Box flex="2" mb={{ base: 12, md: 0 }}>
        <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.900" mb={6}>
          See What Users <br />
          <Text as="span" className="text-gradient-brand">Think of Dotheyswipe®</Text>
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="2xl">
          Do They Swipe is a platform designed to help individuals discreetly and anonymously
          check if their partners or others they know are actively using dating apps.
        </Text>
      </Box>

      {/* Card */}
      <Box
        flex="1"
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        rounded="2xl"
        p={8}
        shadow="sm"
        mx="auto"
      >
        <Text color="gray.700" fontSize="lg" mb={6} textAlign="center">
          "I suspected something was off and decided to give this a try. Within minutes, I had
          answers. Life-changing!"
        </Text>

        <Flex justify="center" mb={3} gap={1}>
          {[...Array(5)].map((_, i) => (
            <Text key={i} className="text-gradient-brand" fontSize="xl">✰</Text>
          ))}
        </Flex>

        <Text fontWeight="medium" textAlign="center" color="gray.900">Sandra W</Text>
      </Box>
    </Flex>
  </Box>
);

export default Testimonial;
