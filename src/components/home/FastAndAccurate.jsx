import { Box, Container, Grid } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import { features } from "../../data/featuresData";

const FastAndAccurate = () => (
  <Box as="section" maxW="6xl" mx="auto" py={6} px={4}>
    <Container mx="auto">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            cardImage={feature.cardImage}
            title={feature.title}
            description={feature.description}
            imageFirst={feature.imageFirst}
          />
        ))}
      </Grid>
    </Container>
  </Box>
);

export default FastAndAccurate;
