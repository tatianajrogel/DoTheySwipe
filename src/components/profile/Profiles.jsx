import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import Map from "../location/Map";
import mapIcon from "../../assets/images/mapIcon.png";
import listingIcon from "../../assets/images/listingIcon.svg";
import Listing from "./Listing";
import { BRAND_GRADIENT } from "../../theme";

const Profiles = () => {
  const [showMap, setShowMap] = useState(false);

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
      <Box display="flex" flexDirection="column" gap={4}>
        {/* Desktop: map + listing */}
        <Box display={{ base: "none", md: "flex" }} flexDirection="column" gap={4}>
          <Map height="h-64" />
          <Listing />
        </Box>

        {/* Mobile: toggle between map and listing */}
        <Box display={{ base: "block", md: "none" }}>
          {showMap ? (
            <Map height="h-[100vh]" />
          ) : (
            <Listing />
          )}
        </Box>

        {/* Mobile sticky footer */}
        <Flex
          display={{ base: "flex", md: "none" }}
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          align="center"
          justify="space-between"
          gap={4}
          w="full"
          borderTop="1px solid"
          borderColor="gray.200"
          px={4}
          py={4}
          bg="white"
          shadow="lg"
          zIndex={50}
        >
          <Button
            onClick={() => setShowMap(!showMap)}
            variant="outline"
            borderColor="brand.500"
            rounded="full"
            w={10}
            h={10}
            p={1.5}
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ color: "brand.500" }}
          >
            {showMap ? (
              <Image src={listingIcon} alt="Listing" />
            ) : (
              <Image src={mapIcon} alt="Map" />
            )}
          </Button>

          <Button
            as={RouterLink}
            to="/profileDetails"
            flex="1"
            rounded="full"
            py={2}
            px={6}
            h="auto"
            color="white"
            fontWeight="medium"
            style={{ backgroundImage: BRAND_GRADIENT }}
            _hover={{ opacity: 0.9 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            Continue <ChevronRight size={20} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profiles;
