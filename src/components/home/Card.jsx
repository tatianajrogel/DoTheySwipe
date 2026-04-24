import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BRAND_GRADIENT } from "../../theme";

const Card = ({ icon, title, description }) => (
  <Box
    bg="white"
    rounded="2xl"
    p={8}
    shadow="lg"
    _hover={{ shadow: "xl", transform: "translateY(-8px)" }}
    transition="all 0.3s"
    display="flex"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
  >
    <Box mb={6}>
      <Flex
        w={20}
        h={20}
        rounded="full"
        align="center"
        justify="center"
        color="white"
        style={{ backgroundImage: BRAND_GRADIENT }}
      >
        {icon}
      </Flex>
    </Box>
    <Heading as="h3" fontSize="xl" fontWeight="bold" color="gray.900" mb={4}>
      {title}
    </Heading>
    <Text color="gray.600">{description}</Text>
  </Box>
);

export default Card;
