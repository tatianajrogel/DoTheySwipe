import { Box, Heading, Text, Input, Button, Field, Image, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Map from "./Map";
import gps from "../../assets/images/gps.png";
import { BRAND_GRADIENT } from "../../theme";

const LocationForm = () => (
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
    <Box px={8} display="flex" flexDirection="column" gap={8}>
      {/* Heading */}
      <Box mt={8}>
        <Heading as="h1" fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" color="gray.800" mb={4}>
          Where <Text as="span" color="brand.500">might they use it?</Text>
        </Heading>
        <Text color="gray.600">
          Try to put as accurate a location as possible where the person may have used Tinder.
          Preferably an address, or a neighborhood.
        </Text>
      </Box>

      {/* Location input */}
      <Box as="form" display="flex" flexDirection="column" gap={4}>
        <Field.Root required>
          <Field.Label fontWeight="medium" color="gray.700" mb={2}>
            Location name <Text as="span" className="text-gradient-brand">*</Text>
          </Field.Label>
          <Flex
            align="center"
            gap={2}
            px={4}
            py={3}
            border="1px solid"
            borderColor="gray.300"
            rounded="lg"
            _focusWithin={{ ring: "2px", ringColor: "brand.500", borderColor: "transparent" }}
          >
            <Input
              type="search"
              placeholder="Search for a place or an address..."
              border="none"
              outline="none"
              flex="1"
              p={0}
              _focus={{ ring: "none", outline: "none" }}
            />
            <Image src={gps} alt="GPS location icon" />
          </Flex>
        </Field.Root>
      </Box>

      {/* Map */}
      <Map height="md:h-80" />

      {/* Continue */}
      <Box pb={{ md: 12 }}>
        <Button
          as={RouterLink}
          to="/profile"
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
  </Box>
);

export default LocationForm;
