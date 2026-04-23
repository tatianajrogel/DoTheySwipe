import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { BRAND_GRADIENT } from "../../theme";
import girl from "../../assets/images/girlImage.jfif";

const CTASection = () => (
  <Box as="section" w="full" py={16} px={4}>
    <Flex
      maxW="6xl"
      mx="auto"
      px={8}
      rounded="xl"
      style={{ backgroundImage: BRAND_GRADIENT }}
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
    >
      {/* Text */}
      <Box w={{ md: "2/3" }} py={16} textAlign={{ base: "center", md: "left" }} mb={{ base: 10, md: 0 }}>
        <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="white" mb={6}>
          Get the Clarity You Deserve.
        </Heading>
        <Text fontSize="xl" color="white" opacity={0.9} mb={8}>
          Search millions of profiles quickly and securely
        </Text>

        <Flex align="center" justify="space-between" rounded="2xl" px={6} py={4}>
          <Button
            bg="white"
            rounded="full"
            px={6}
            py={3}
            h="auto"
            fontWeight="semibold"
            display="flex"
            gap={2}
            _hover={{ boxShadow: "lg" }}
            transition="all 0.3s"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 24, height: 24 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#ctaGrad)"
              strokeWidth={2}
            >
              <defs>
                <linearGradient id="ctaGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"   stopColor="#E11D48" />
                  <stop offset="33%"  stopColor="#CC1D6B" />
                  <stop offset="66%"  stopColor="#B81C8B" />
                  <stop offset="100%" stopColor="#A51CA9" />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Text className="text-gradient-brand">Search on Tinder</Text>
          </Button>
        </Flex>
      </Box>

      {/* Image */}
      <Box w={{ md: "1/3" }} display="flex" justifyContent="center">
        <Image
          src={girl}
          objectFit="cover"
          maxH="400px"
          w="full"
          rounded="2xl"
          alt="Profile"
        />
      </Box>
    </Flex>
  </Box>
);

export default CTASection;
