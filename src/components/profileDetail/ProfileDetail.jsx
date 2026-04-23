import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box, Flex, Grid, Heading, Text, Badge, Button, Image, IconButton } from "@chakra-ui/react";
import location from "../../assets/images/location.svg";
import capIcon from "../../assets/images/cap-icon.svg";
import arrowLeft from "../../assets/images/arrowLeft.png";

const ProfileDetail = ({ profile, images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const getPosition = (index) => {
    if (index === current)
      return { position: "absolute", width: 240, height: 320, rounded: "xl", shadow: "lg", objectFit: "cover", transition: "all 0.5s", border: "2px solid white", zIndex: 20, transform: "scale(1)" };
    if (index === (current - 1 + images.length) % images.length)
      return { position: "absolute", width: 176, height: 320, rounded: "xl", shadow: "md", objectFit: "cover", transition: "all 0.5s", zIndex: 10, opacity: 0.7, transform: "translateX(-48px) scale(0.9) rotate(-5deg)" };
    if (index === (current - 2 + images.length) % images.length)
      return { position: "absolute", width: 176, height: 320, rounded: "xl", shadow: "md", objectFit: "cover", transition: "all 0.5s", zIndex: 5, opacity: 0.7, transform: "translateX(-56px) scale(0.9) rotate(-12deg)" };
    if (index === (current + 1) % images.length)
      return { position: "absolute", width: 176, height: 320, rounded: "xl", shadow: "md", objectFit: "cover", transition: "all 0.5s", zIndex: 10, opacity: 0.7, transform: "translateX(48px) scale(0.9) rotate(5deg)" };
    if (index === (current + 2) % images.length)
      return { position: "absolute", width: 176, height: 320, rounded: "xl", shadow: "md", objectFit: "cover", transition: "all 0.5s", zIndex: 5, opacity: 0.7, transform: "translateX(56px) scale(0.9) rotate(12deg)" };
    return { display: "none" };
  };

  return (
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
        as="section"
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        py={{ base: 8, md: 14 }}
        p={6}
        bg="white"
        rounded="2xl"
      >
        {/* Left – info */}
        <Flex direction="column" gap={4}>
          <Box
            w={8}
            h={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="full"
            bg="white"
            shadow="sm"
          >
            <Image src={arrowLeft} alt="Go back" />
          </Box>

          <Heading as="h2" fontSize="2xl" fontWeight="bold">{profile.name}</Heading>

          <Flex align="center" gap={4} color="gray.800">
            <Flex align="center" gap={1}>
              ♂ {profile.gender} {profile.age}
            </Flex>
            <Flex align="center" gap={1}>
              <Image src={location} w="12px" h="16px" alt="Location" />
              {profile.location}
            </Flex>
          </Flex>

          <Flex align="center" gap={1} color="gray.800">
            <Image src={capIcon} w="16px" h="16px" alt="Job" />
            {profile.job}
          </Flex>

          {/* Interests */}
          <Flex wrap="wrap" gap={2}>
            {profile.interests.map((interest) => (
              <Badge
                key={interest}
                px={3}
                py={1}
                bg="gray.100"
                color="gray.700"
                fontSize="sm"
                rounded="full"
                fontWeight="normal"
              >
                {interest}
              </Badge>
            ))}
          </Flex>

          {/* About */}
          <Box>
            <Heading as="h3" fontSize="lg" fontWeight="semibold" color="gray.800" mb={3}>
              About
            </Heading>
            <Text color="gray.600" lineHeight="relaxed">{profile.about}</Text>
          </Box>
        </Flex>

        {/* Right – image slider */}
        <Flex
          position="relative"
          alignItems="center"
          alignSelf={{ base: "center", lg: "end" }}
          justifyContent="center"
          h={72}
        >
          <IconButton
            onClick={prev}
            position="absolute"
            left={{ base: "72px", lg: "120px" }}
            zIndex={30}
            size="sm"
            bg="gray.200"
            opacity={0.7}
            rounded="full"
            shadow="sm"
            _hover={{ bg: "gray.100" }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </IconButton>

          <Flex align="center" justify="center" position="relative" w="full">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Profile photo ${index + 1}`}
                {...getPosition(index)}
              />
            ))}
          </Flex>

          <IconButton
            onClick={next}
            position="absolute"
            right={{ base: "72px", lg: "120px" }}
            zIndex={20}
            size="sm"
            bg="gray.200"
            opacity={0.7}
            rounded="full"
            shadow="sm"
            _hover={{ bg: "gray.100" }}
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </IconButton>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProfileDetail;
