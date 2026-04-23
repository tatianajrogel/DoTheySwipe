import {
  Box, Grid, Heading, Text, Input, Textarea, Button, Field, Image, Flex,
} from "@chakra-ui/react";
import { BRAND_GRADIENT } from "../../theme";
import youngCouple from "../../assets/images/young-couple.png";
import vector from "../../assets/images/Vector.png";

const inputStyles = {
  borderColor: "gray.300",
  rounded: "lg",
  px: 4,
  py: 2.5,
  _focus: { ring: "2px", ringColor: "brand.500", outline: "none" },
};

const Contact = () => (
  <Box as="section" py={16} mt={{ base: 8, md: 20 }} mx="auto" px={4} display="flex" justifyContent="center">
    <Box maxW="6xl" w="full">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
        {/* Left – gradient panel */}
        <Flex
          direction="column"
          order={{ base: 2, md: 1 }}
          color="white"
          rounded="2xl"
          overflow="hidden"
          style={{ backgroundImage: BRAND_GRADIENT }}
        >
          <Box style={{ backgroundImage: `url(${vector})` }} bgCenter="center">
            <Box pt={8} textAlign="center">
              <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={4} color="white">
                Have Questions?
              </Heading>
              <Text fontSize="lg" color="white">Can't find the answer you're looking for?</Text>
            </Box>
            <Image src={youngCouple} alt="Happy couple" objectFit="cover" w="full" h="auto" />
          </Box>
        </Flex>

        {/* Right – form */}
        <Flex
          direction="column"
          order={{ base: 1, md: 2 }}
          gap={6}
          rounded="2xl"
          p={8}
          bg="white"
          shadow="md"
        >
          <Box>
            <Heading as="h3" fontSize="4xl" fontWeight="bold" color="gray.900" mb={3}>
              Get in <Text as="span" className="text-gradient-brand">touch</Text>
            </Heading>
            <Text fontSize="lg" color="gray.900">Our friendly team would love to hear from you.</Text>
          </Box>

          <Box as="form" display="flex" flexDirection="column" gap={4}>
            <Field.Root required>
              <Field.Label fontWeight="medium" color="gray.700" mb={2} fontSize="lg">
                First name <Text as="span" className="text-gradient-brand">*</Text>
              </Field.Label>
              <Input type="text" placeholder="First Name" {...inputStyles} />
            </Field.Root>

            <Field.Root required>
              <Field.Label fontWeight="medium" color="gray.700" mb={2} fontSize="lg">
                Email <Text as="span" className="text-gradient-brand">*</Text>
              </Field.Label>
              <Input type="email" placeholder="your@email.com" {...inputStyles} />
            </Field.Root>

            <Field.Root required>
              <Field.Label fontWeight="medium" color="gray.700" mb={2} fontSize="lg">
                Phone Number <Text as="span" className="text-gradient-brand">*</Text>
              </Field.Label>
              <Input type="text" placeholder="+1 (555) 000-000" {...inputStyles} />
            </Field.Root>

            <Field.Root required>
              <Field.Label fontWeight="medium" color="gray.700" mb={2} fontSize="lg">
                Message <Text as="span" className="text-gradient-brand">*</Text>
              </Field.Label>
              <Textarea
                rows={4}
                placeholder="Leave us a message..."
                borderColor="gray.300"
                rounded="lg"
                px={4}
                py={3}
                _focus={{ ring: "2px", ringColor: "brand.500", borderColor: "transparent" }}
              />
            </Field.Root>

            <Button
              type="submit"
              w="full"
              rounded="full"
              py={3}
              h="auto"
              color="white"
              fontWeight="semibold"
              style={{ backgroundImage: BRAND_GRADIENT }}
              _hover={{ opacity: 0.9 }}
              transition="all 0.3s"
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Grid>
    </Box>
  </Box>
);

export default Contact;
