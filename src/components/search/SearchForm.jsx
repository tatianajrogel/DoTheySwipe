import { Box, Grid, Heading, Text, Input, Button, Field, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import searchImage from "../../assets/images/searchImage.png";
import { BRAND_GRADIENT } from "../../theme";

const SearchForm = ({ layout }) => (
  <Box
    mx="auto"
    w="full"
    maxW={{ lg: "5xl" }}
    bg="white"
    rounded={{ md: "2xl" }}
    shadow={{ md: "sm" }}
    position={{ md: "relative" }}
    mt={{ md: "-144px" }}
    top={{ md: "50%" }}
    left={{ md: "50%" }}
    transform={{ md: "translateX(-50%)" }}
  >
    <Grid
      templateColumns={{ base: "1fr", md: layout === "md:grid-cols-2" ? "1fr 1fr" : "1fr" }}
      px={8}
      gap={8}
    >
      {/* Left – form */}
      <Box py={{ base: 8, md: 4, lg: 8 }}>
        <Box mb={{ base: 8, md: 4, lg: 8 }}>
          <Heading as="h2" fontSize="2xl" fontWeight="bold" color="gray.800">
            Search <Text as="span" color="brand.500">for a Person</Text>
          </Heading>
          <Text fontSize="sm" color="gray.600" mt={2}>
            Find the individual you're looking for by entering specific details,
            such as their name, age, and gender.
          </Text>
        </Box>

        <Box as="form" display="flex" flexDirection="column" gap={4}>
          {/* First name */}
          <Field.Root required>
            <Field.Label fontWeight="medium" color="gray.700" mb={2}>
              First name <Text as="span" className="text-gradient-brand">*</Text>
            </Field.Label>
            <Input
              type="text"
              placeholder="First Name"
              borderColor="gray.300"
              rounded="lg"
              px={4}
              py={2}
              _focus={{ ring: "2px", ringColor: "brand.500", outline: "none" }}
            />
          </Field.Root>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {/* Age */}
            <Field.Root required>
              <Field.Label fontWeight="medium" color="gray.700" mb={2}>
                Age <Text as="span" className="text-gradient-brand">*</Text>
              </Field.Label>
              <Input
                type="number"
                placeholder="Enter age"
                borderColor="gray.300"
                rounded="lg"
                px={4}
                py={2}
                _focus={{ ring: "2px", ringColor: "brand.500", outline: "none" }}
              />
            </Field.Root>

            {/* Gender */}
            <Field.Root required>
              <Field.Label fontWeight="medium" color="gray.700" mb={2}>
                Gender <Text as="span" className="text-gradient-brand">*</Text>
              </Field.Label>
              <Box
                as="select"
                borderWidth="1px"
                borderColor="gray.300"
                rounded="lg"
                px={4}
                py={2}
                w="full"
                bg="white"
                _focus={{ ring: "2px", ringColor: "brand.500", outline: "none" }}
              >
                <option value="">Choose</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Box>
            </Field.Root>
          </Grid>

          {/* Continue */}
          <Button
            as={RouterLink}
            to="/location"
            w="300px"
            mx="auto"
            rounded="full"
            py={{ base: 2, md: 3.5 }}
            px={6}
            h="auto"
            color="white"
            fontWeight="medium"
            style={{ backgroundImage: BRAND_GRADIENT }}
            _hover={{ opacity: 0.9 }}
            display="flex"
            alignItems="center"
            gap={2}
          >
            Continue <ChevronRight size={20} />
          </Button>
        </Box>
      </Box>

      {/* Right – illustration */}
      <Box display="flex" flexDirection="column" order={{ base: -1, md: 1 }} alignSelf="end" color="white">
        <Image src={searchImage} alt="Search illustration" objectFit="cover" w="full" />
      </Box>
    </Grid>
  </Box>
);

export default SearchForm;
