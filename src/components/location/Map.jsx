import { Box, Image } from "@chakra-ui/react";
import map from "../../assets/images/map.png";

const Map = ({ className = "", height = "" }) => (
  <Box rounded="lg" className={className}>
    <Box rounded="lg" className={height} display="flex" justifyContent="center">
      <Image src={map} objectFit="cover" w="full" h="full" rounded="lg" alt="map" />
    </Box>
  </Box>
);

export default Map;
