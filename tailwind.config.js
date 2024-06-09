const colors = {
  primary: {
    DEFAULT: "#663399",
    50: "#f2e7f5",
    100: "#dfc3f8",
  },
  success: {
    DEFAULT: "#d0febc",
  },
  error: {
    DEFAULT: "#fdbfbf",
  },
  processed: {
    DEFAULT: "#fdedaa",
  },
  border: {
    DEFAULT: "#ECECEC",
    50: "#f9f9f9",
    100: "#f4f4f4",
    200: "#ececec",
    300: "#dddddd",
    400: "#bababa",
    500: "#9a9a9a",
    600: "#727272",
    700: "#5e5e5e",
    800: "#3f3f3f",
    900: "#1e1e1e",
  },
  background: {
    DEFAULT: "#ffffff",
    50: "#ffffff",
    100: "#fAfAfA",
    200: "#f5f5f5",
    300: "#f0f0f0",
    400: "#dedede",
  },
};

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    lg: { max: "1280px" },
    md: { max: "1100px" },
    sm: { max: "768px" },
    xs: { max: "350px" },
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#ffffff",
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    success: colors.success,
    processed: colors.processed,
  },
  extend: {
    backgroundColor: {
      default: colors.background,
    },
    textColor: {
      default: colors.text,
    },
    placeholderColor: {
      default: colors.text,
    },
    borderColor: {
      default: colors.border,
    },
    divideColor: {
      default: colors.border,
    },
    extendedSpacing: {
      13: "3.25rem",
      15: "3.75rem",
      50: "12.5rem",
    },
    lineHeight: {
      0: "0rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      20: "5rem",
    },
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "0.75rem" }],
    },
    transitionProperty: {
      height: "height",
      width: "width",
    },
    transitionTimingFunction: {
      smooth: "cubic-bezier(0.23, 1, 0.320, 1)",
    },
    height: (theme) => ({
      ...theme("extendedSpacing"),
    }),
    width: (theme) => ({
      ...theme("extendedSpacing"),
    }),
    minWidth: (theme) => ({
      screen: "100vw",
      ...theme("spacing"),
      ...theme("extendedSpacing"),
    }),
    maxWidth: (theme) => ({
      screen: "100vw",
      ...theme("spacing"),
      ...theme("extendedSpacing"),
    }),
    minHeight: (theme) => ({
      screen: "100vh",
      ...theme("spacing"),
      ...theme("extendedSpacing"),
    }),
    maxHeight: (theme) => ({
      screen: "100vh",
      ...theme("spacing"),
      ...theme("extendedSpacing"),
    }),
    zIndex: {
      max: 99999999999,
    },
    boxShadow: {
      DEFAULT: "0 5px 15px 0 rgb(0 0 0 / 10%)",
    },
  },
};
