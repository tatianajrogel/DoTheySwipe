import { NavLink, useLocation } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import {
  Box, Flex, HStack, Image, Text, Separator,
} from "@chakra-ui/react";
import SocialIcon from "./SocialIcon";
import logo from "../../assets/images/logo.png";

const socialLinks = [
  { href: "https://facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://twitter.com/", label: "Twitter", Icon: Twitter },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://instagram.com/", label: "Instagram", Icon: Instagram },
];

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ's" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/contact", label: "Contact Us" },
];

const Footer = () => {
  const location = useLocation();
  const isMapPage = location.pathname === "/profile";

  if (isMapPage) return <Box display={{ base: "none", md: "block" }} as="footer" />;

  return (
    <Box as="footer" pb={{ sm: 10 }} px={{ sm: 4 }}>
      <Box
        maxW="6xl"
        mx="auto"
        bg="gray.100"
        rounded="xl"
        px={4}
        pt={{ base: 6, md: 16 }}
        pb={6}
      >
        {/* Logo + Nav */}
        <Flex direction="column" align="center" mb={{ base: 0, md: 4 }}>
          <Flex align="center" gap={2} mb={6}>
            <Image src={logo} w={{ base: "32px", lg: "36px" }} alt="DoTheySwipe logo" />
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Text fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" className="text-gradient-brand">
                DoTheySwipe
              </Text>
            </NavLink>
          </Flex>

          <Flex as="nav" wrap="wrap" justify="center" gap={{ base: 6, md: 8 }} mb={6} fontSize={{ base: "sm", md: "lg" }}>
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  color: isActive ? "#E11D48" : "#0f172a",
                  textDecoration: "none",
                  transition: "color 0.2s",
                })}
              >
                {label}
              </NavLink>
            ))}
          </Flex>
        </Flex>

        <Separator borderColor="gray.300" />

        {/* Copyright + Socials */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          pt={6}
          gap={{ base: 4, md: 0 }}
        >
          <Text color="#142546">© 2024 All Rights Reserved dotheyswipe.com</Text>
          <HStack gap={3}>
            {socialLinks.map((item) => (
              <SocialIcon key={item.label} {...item} />
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
