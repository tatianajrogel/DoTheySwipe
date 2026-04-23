import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import {
  Box, Flex, HStack, IconButton, Collapsible, Image, Text,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { BRAND_GRADIENT } from "../../theme";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ's" },
];

const navLinkStyle = ({ isActive }) => ({
  fontWeight: 500,
  transition: "color 0.2s",
  color: isActive ? "#E11D48" : "#121926",
  textDecoration: "none",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      px={{ base: 0, md: 5 }}
      py={{ base: 0, md: 5 }}
    >
      <Box
        as="nav"
        bg="white"
        rounded={{ base: "none", md: "xl" }}
        shadow="md"
        pt={{ base: 4, md: 0 }}
        p={{ base: 0, md: 4 }}
        position="relative"
        zIndex={50}
      >
        <Flex
          maxW="container.xl"
          mx="auto"
          justify="space-between"
          align="center"
        >
          {/* Logo */}
          <Flex align="center" gap={2} pl={{ base: 4, md: 0 }}>
            <Image src={logo} w={{ base: "32px", lg: "36px" }} alt="DoTheySwipe logo" />
            <Text fontSize="2xl" fontWeight="bold" className="text-gradient-brand">
              DoTheySwipe
            </Text>
          </Flex>

          {/* Desktop nav */}
          <HStack gap={8} display={{ base: "none", md: "flex" }} align="center">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} style={navLinkStyle}>
                {label}
              </NavLink>
            ))}

            {/* Gradient-border CTA */}
            <Box
              as={NavLink}
              to="/search"
              px={5}
              py={2.5}
              rounded="full"
              fontWeight="semibold"
              display="inline-flex"
              alignItems="center"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #E11D48, #A51CA9) border-box",
                border: "2px solid transparent",
                textDecoration: "none",
              }}
            >
              <Text className="text-gradient-brand">Search on Tinder</Text>
            </Box>
          </HStack>

          {/* Mobile: search + hamburger */}
          <HStack gap={4} pr={9} display={{ base: "flex", md: "none" }}>
            <Box as="button" aria-label="Search">
              <Search size={24} color="#121926" />
            </Box>
            <IconButton
              aria-label="Toggle Menu"
              variant="ghost"
              onClick={toggle}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </IconButton>
          </HStack>
        </Flex>

        {/* Mobile menu */}
        <Collapsible.Root open={isOpen}>
          <Collapsible.Content>
            <Box
              display={{ base: "block", md: "none" }}
              bg="white"
              mt={4}
              borderTop="1px solid"
              borderColor="gray.200"
            >
              <Flex direction="column" gap={4} px={4} pb={6} pt={4}>
                {NAV_LINKS.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    onClick={close}
                    style={(s) => ({
                      ...navLinkStyle(s),
                      paddingTop: "8px",
                      paddingBottom: "8px",
                    })}
                  >
                    {label}
                  </NavLink>
                ))}

                <Box
                  as={NavLink}
                  to="/search"
                  px={5}
                  py={3}
                  rounded="full"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="center"
                  onClick={close}
                  style={{
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(to right, #E11D48, #A51CA9) border-box",
                    border: "2px solid transparent",
                    textDecoration: "none",
                  }}
                >
                  <Text className="text-gradient-brand">Search on Tinder</Text>
                </Box>
              </Flex>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      {/* Overlay */}
      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.600"
          onClick={close}
        />
      )}
    </Box>
  );
};

export default Navbar;
