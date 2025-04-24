/**
 * This Tailwind theme mirrors Apple’s Human Interface Guidelines (HIG)
 * to maintain visual and interaction cohesion with our iOS app projects.
 * Colors, spacing, type, and transitions follow the iOS design system,
 * with additional consideration for future cross-platform consistency.
 */

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Apple system colors (light mode)
      blue: {
        DEFAULT: "#007AFF", // SF Blue
        dark: "#0040DD",
      },
      green: {
        DEFAULT: "#34C759", // SF Green
        dark: "#30B251",
      },
      indigo: {
        DEFAULT: "#5856D6", // SF Indigo
        dark: "#4744C9",
      },
      orange: {
        DEFAULT: "#FF9500", // SF Orange
        dark: "#E68500",
      },
      pink: {
        DEFAULT: "#FF2D55", // SF Pink
        dark: "#E62A4D",
      },
      purple: {
        DEFAULT: "#AF52DE", // SF Purple
        dark: "#9447C3",
      },
      red: {
        DEFAULT: "#FF3B30", // SF Red
        dark: "#E6352B",
      },
      teal: {
        DEFAULT: "#5AC8FA", // SF Teal
        dark: "#47B4E6",
      },
      yellow: {
        DEFAULT: "#FFCC00", // SF Yellow
        dark: "#E6B800",
      },
      // Grayscale
      gray: {
        50: "#F9F9F9",
        100: "#F2F2F7",
        200: "#E5E5EA",
        300: "#D1D1D6",
        400: "#C7C7CC",
        500: "#AEAEB2",
        600: "#8E8E93",
        700: "#636366",
        800: "#3A3A3C",
        900: "#1C1C1E",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    // Font family according to Apple's SF fonts
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: ["New York", "Times", "serif"],
      mono: [
        "SF Mono",
        "SFMono-Regular",
        "ui-monospace",
        "Menlo",
        "Monaco",
        "Consolas",
        "monospace",
      ],
    },
    // Font size according to Apple's typography scale
    fontSize: {
      xs: ["11px", { lineHeight: "13px" }],
      sm: ["13px", { lineHeight: "16px" }],
      base: ["17px", { lineHeight: "22px" }],
      lg: ["19px", { lineHeight: "24px" }],
      xl: ["20px", { lineHeight: "25px" }],
      "2xl": ["21px", { lineHeight: "26px" }],
      "3xl": ["22px", { lineHeight: "28px" }],
      "4xl": ["24px", { lineHeight: "31px" }],
      "5xl": ["28px", { lineHeight: "34px" }],
      "6xl": ["34px", { lineHeight: "41px" }],
      "7xl": ["40px", { lineHeight: "47px" }],
    },
    // Font weight according to Apple's SF fonts
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    // Border radius values from Apple's HIG
    borderRadius: {
      none: "0",
      sm: "4px",
      DEFAULT: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "22px",
      full: "9999px",
    },
    // Spacing scale based on Apple's 8-point grid
    spacing: {
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "8": "32px",
      "10": "40px",
      "12": "48px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "32": "128px",
      "40": "160px",
      "48": "192px",
      "56": "224px",
      "64": "256px",
    },
    // Shadows based on Apple's elevation system
    boxShadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      none: "none",
    },
    extend: {
      // Apple's animation timing functions
      transitionTimingFunction: {
        "apple-ease-in": "cubic-bezier(0.4, 0.0, 1, 1)",
        "apple-ease-out": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "apple-ease-in-out": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      // Common Apple device sizes
      screens: {
        "iphone-se": "375px",
        iphone: "390px",
        "iphone-plus": "428px",
        "ipad-mini": "744px",
        ipad: "810px",
        "ipad-pro-11": "834px",
        "ipad-pro-12": "1024px",
        "macbook-air": "1280px",
        "macbook-pro": "1512px",
      },
    },
  },
  plugins: [],
};
