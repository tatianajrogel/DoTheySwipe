import { Box, Link } from "@chakra-ui/react";

const SocialIcon = ({ href, Icon }) => (
  <Box
    w={8}
    h={8}
    bg="white"
    rounded="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.1)" }}
      display="flex"
    >
      <Icon size={16} color="#475569" />
    </Link>
  </Box>
);

export default SocialIcon;
