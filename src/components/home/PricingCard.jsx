import { Box, Heading, Text, Button, Separator, List } from "@chakra-ui/react";
import { BRAND_GRADIENT } from "../../theme";

const PricingCard = ({ title, price, features }) => (
  <Box
    bg="white"
    rounded="2xl"
    p={8}
    shadow="lg"
    _hover={{ shadow: "xl" }}
    transition="all 0.3s"
    display="flex"
    flexDirection="column"
    position="relative"
  >
    <Heading as="h3" fontSize="2xl" fontWeight="bold" color="gray.900" mb={2}>
      {title}
    </Heading>

    <Box mb={6} pb={4} borderBottom="1px solid" borderColor="gray.200">
      <Text as="span" fontSize="4xl" fontWeight="bold" color="brand.500">${price}</Text>
      <Text as="span" color="gray.600"> per month</Text>
    </Box>

    <List.Root mb={8} flex="1" gap={3} listStyleType="none">
      {features.map((feature, index) => (
        <List.Item key={index} display="flex" alignItems="start">
          <Text as="span" mr={2} mt={1}>✔</Text>
          <Text color="gray.700">{feature}</Text>
        </List.Item>
      ))}
    </List.Root>

    <Separator borderColor="gray.200" mb={8} />

    <Button
      rounded="full"
      w="full"
      py={3}
      h="auto"
      fontWeight="semibold"
      color="white"
      style={{ backgroundImage: BRAND_GRADIENT }}
      _hover={{ boxShadow: "lg" }}
      transition="all 0.3s"
    >
      Choose this Plan
    </Button>
  </Box>
);

export default PricingCard;
