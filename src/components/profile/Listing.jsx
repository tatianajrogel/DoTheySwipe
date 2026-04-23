import { Box, Grid, Image, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { profiles } from "../../data/profilesData";

const Listing = () => (
  <Box position="relative">
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
      gap={4}
      p={4}
      px={{ md: 6 }}
    >
      {profiles.map((profile) => (
        <Box
          key={profile.id}
          w="full"
          h={{ base: "256px", lg: "224px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          rounded="lg"
        >
          <Image
            src={profile.src}
            objectFit="cover"
            w="full"
            h="full"
            filter="blur(8px)"
            alt="Blurred profile preview"
          />
        </Box>
      ))}
    </Grid>

    {/* Centered CTA overlay (desktop) */}
    <Box
      display={{ base: "none", md: "flex" }}
      position="absolute"
      inset={0}
      align="center"
      justify="center"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        as={RouterLink}
        to="/profileDetails"
        px={6}
        py={2}
        h="auto"
        bg="white"
        fontWeight="semibold"
        rounded="full"
        shadow="lg"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s"
      >
        <Text className="text-gradient-brand">Buy now to see results</Text>
      </Button>
    </Box>
  </Box>
);

export default Listing;
