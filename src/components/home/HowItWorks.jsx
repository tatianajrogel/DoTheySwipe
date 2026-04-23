import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import Card from "./Card.jsx";
import { howItWorksSteps } from "../../data/howItWorksData";

const HowItWorks = () => (
  <Box
    as="section"
    py={16}
    maxW="6xl"
    mx="auto"
    px={4}
    bgGradient="to-b"
    gradientFrom="indigo.100"
    gradientTo="purple.50"
    rounded="xl"
  >
    <Container mx="auto">
      <Heading
        as="h2"
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={16}
        className="text-gradient-brand"
      >
        How does it work
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {howItWorksSteps.map((step) => (
          <Card
            key={step.id}
            icon={<step.Icon size={32} />}
            title={step.title}
            description={step.description}
          />
        ))}
      </Grid>
    </Container>
  </Box>
);

export default HowItWorks;
