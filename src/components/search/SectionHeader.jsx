import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { BRAND_GRADIENT } from "../../theme";
import profile1 from "../../assets/images/searchImage1.png";
import profile2 from "../../assets/images/searchImage2.png";
import profile3 from "../../assets/images/searchImage3.png";
import profile4 from "../../assets/images/searchImage4.png";
import profile5 from "../../assets/images/searchImage5.png";
import profile6 from "../../assets/images/searchImage6.png";
import vector from "../../assets/images/Vector.png";

const AvatarPin = ({ src, style }) => (
  <Image
    src={src}
    alt="Profile"
    rounded="full"
    border="2px solid"
    borderColor="whiteAlpha.600"
    objectFit="cover"
    position="absolute"
    style={style}
  />
);

const SectionHeader = ({ title, description, children }) => (
  <Box
    display={{ base: "none", md: "flex" }}
    position="relative"
    w="full"
    h={80}
    rounded="2xl"
    overflow="hidden"
    justifyContent="center"
    py={16}
    px={8}
    style={{ backgroundImage: BRAND_GRADIENT }}
  >
    {/* Background pattern */}
    <Box
      position="absolute"
      inset={0}
      bgImage={`url(${vector})`}
      bgCenter="center"
    />

    {/* Left avatars */}
    <AvatarPin src={profile1} style={{ width: 60, height: 60, top: "6%", left: "2%" }} />
    <AvatarPin src={profile2} style={{ width: 44, height: 44, top: "74px", left: "10%" }} />
    <AvatarPin src={profile3} style={{ width: 44, height: 44, top: "8%", left: "16%" }} />

    {/* Center content */}
    <Box textAlign="center" color="white" zIndex={10} maxW="3xl">
      <Heading as="h1" fontSize={{ base: "3xl", lg: "4xl" }} fontWeight="bold" mb={4}>
        {title}
      </Heading>
      <Text opacity={0.9}>{description}</Text>
    </Box>

    {/* Right avatars */}
    <AvatarPin src={profile6} style={{ width: 44, height: 44, top: "6%", right: "2%" }} />
    <AvatarPin src={profile4} style={{ width: 60, height: 60, top: "16%", right: "8%" }} />
    <AvatarPin src={profile5} style={{ width: 44, height: 44, top: "8%", right: "150px" }} />

    {children}
  </Box>
);

export default SectionHeader;
