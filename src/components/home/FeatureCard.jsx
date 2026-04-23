import { Box, Heading, Text, Image } from "@chakra-ui/react";

const FeatureCard = ({ cardImage, title, description, imageFirst = true }) => (
  <Box
    bg="white"
    rounded="2xl"
    p={4}
    shadow="lg"
    _hover={{ shadow: "xl" }}
    transition="all 0.3s"
    display="flex"
    flexDirection="column"
  >
    {imageFirst ? (
      <>
        <Box w="full" h={72} rounded="lg" overflow="hidden">
          <Image src={cardImage} alt={title} w="full" h="full" objectFit="cover" />
        </Box>
        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="bold" mt={4} mb={4} className="text-gradient-brand">
            {title}
          </Heading>
          <Text color="gray.600">{description}</Text>
        </Box>
      </>
    ) : (
      <>
        <Box mb={6}>
          <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4} className="text-gradient-brand">
            {title}
          </Heading>
          <Text color="gray.600">{description}</Text>
        </Box>
        <Box w="full" h={72} rounded="lg" overflow="hidden">
          <Image src={cardImage} alt={title} w="full" h="full" objectFit="cover" />
        </Box>
      </>
    )}
  </Box>
);

export default FeatureCard;
