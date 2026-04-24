import { Accordion, Text, Box } from "@chakra-ui/react";

const FAQItem = ({ question, answer, value }) => (
  <Accordion.Item value={value} borderBottom="1px solid" borderColor="gray.200">
    <Accordion.ItemTrigger
      py={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="full"
      textAlign="left"
      fontWeight="semibold"
      fontSize="lg"
      color="gray.900"
      _hover={{ color: "brand.500" }}
      transition="color 0.2s"
      cursor="pointer"
    >
      <Text flex="1">{question}</Text>
      <Accordion.ItemIndicator color="brand.500" />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Box pb={6}>
        <Text color="gray.700" lineHeight="relaxed">{answer}</Text>
      </Box>
    </Accordion.ItemContent>
  </Accordion.Item>
);

export default FAQItem;
