import { Box, Flex, Heading, Text, Button, Accordion } from "@chakra-ui/react";
import FAQItem from "./FAQItem";
import { faqItems } from "../../data/faqData";

const FAQSection = () => (
  <Box as="section" py={16} px={4} rounded="xl">
    <Box maxW="6xl" mx="auto">
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ lg: "center" }}
        mb={16}
        gap={8}
      >
        <Box>
          <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="gray.900" mb={4}>
            Frequently{" "}
            <Text as="span" className="text-gradient-brand">Asked Questions.</Text>
          </Heading>
          <Text fontSize="xl" color="gray.700" maxW="3xl">
            Answers to Common Questions About "DoTheySwipe"
          </Text>
        </Box>

        <Box>
          <Button
            variant="outline"
            rounded="full"
            px={8}
            py={4}
            h="auto"
            fontWeight="semibold"
            color="gray.800"
            borderColor="gray.700"
            _hover={{ boxShadow: "lg" }}
            transition="all 0.3s"
          >
            View all FAQs
          </Button>
        </Box>
      </Flex>

      <Box maxW="6xl" mx="auto" bg="white" px={5} rounded="xl">
        <Accordion.Root collapsible>
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              value={String(item.id)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion.Root>
      </Box>
    </Box>
  </Box>
);

export default FAQSection;
