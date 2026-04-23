import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Flex, Heading, Text, Button, Spinner } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { BRAND_GRADIENT } from "./theme";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Search = lazy(() => import("./pages/Search"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Location = lazy(() => import("./pages/Location"));
const Profile = lazy(() => import("./pages/Profile"));
const ProfileDetails = lazy(() => import("./pages/ProfileDetails"));

const NotFound = () => (
  <Flex direction="column" align="center" justify="center" minH="60vh" textAlign="center" px={4}>
    <Heading fontSize="6xl" style={{ backgroundImage: BRAND_GRADIENT, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} mb={4}>
      404
    </Heading>
    <Text fontSize="xl" color="slate.700" mb={8}>Page not found.</Text>
    <Button
      as={RouterLink}
      to="/"
      rounded="full"
      px={8}
      py={3}
      fontWeight="semibold"
      color="white"
      style={{ backgroundImage: BRAND_GRADIENT }}
      _hover={{ boxShadow: "lg" }}
    >
      Go Home
    </Button>
  </Flex>
);

function App() {
  return (
    <Box>
      <Navbar />
      <Suspense
        fallback={
          <Flex align="center" justify="center" minH="60vh">
            <Spinner size="lg" color="brand.500" />
          </Flex>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/search" element={<Search />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/location" element={<Location />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Box>
  );
}

export default App;
