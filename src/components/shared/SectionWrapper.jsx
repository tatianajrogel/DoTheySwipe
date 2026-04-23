import { Box } from "@chakra-ui/react";
import SectionHeader from "../search/SectionHeader";

const SectionWrapper = ({ title = "", description = "", children }) => (
  <Box
    position="relative"
    w="full"
    maxW="7xl"
    mx="auto"
    mt={{ base: 8, md: 20 }}
    rounded="xl"
    px={{ md: 4 }}
    py={12}
  >
    <SectionHeader title={title} description={description} />
    {children}
  </Box>
);

export default SectionWrapper;
