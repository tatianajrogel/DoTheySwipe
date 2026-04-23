import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

export const BRAND_GRADIENT =
  "linear-gradient(to right, #E11D48, #CC1D6B, #B81C8B, #A51CA9)"

const config = defineConfig({
  globalCss: {
    "*": { boxSizing: "border-box" },
    "html, body": { margin: 0, padding: 0 },
    ".text-gradient-brand": {
      backgroundImage: BRAND_GRADIENT,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      display: "inline",
    },
    ".bg-gradient-brand": {
      backgroundImage: BRAND_GRADIENT,
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50:  { value: "#fce7ef" },
          100: { value: "#f9c0d3" },
          200: { value: "#f490ac" },
          300: { value: "#ef6085" },
          400: { value: "#e93060" },
          500: { value: "#E11D48" },
          600: { value: "#CC1D6B" },
          700: { value: "#B81C8B" },
          800: { value: "#A51CA9" },
          900: { value: "#8c12c0" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid:      { value: "{colors.brand.500}" },
          muted:      { value: "{colors.brand.100}" },
          subtle:     { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing:  { value: "{colors.brand.500}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
