import media from "./media";

const theme = {
  media,
  shadow: "0 0 2rem 0 rgba(136, 152, 170, 0.15)",
  shadowHover: "0 0 4rem 0 rgba(136, 152, 170, 0.3)",
  radius: ".3rem",
  maxWidth: "1170px",
  color: {
    primary: "#5B97F2",
    secondary: "#8265FC",
    info: "#30CEE7",
    default: "#1f262d",
    success: "#00E18D",
    warning: "#ffab00",
    danger: "#ff4f64",
    gradient: "linear-gradient(135deg, #30cee7, #8265fc);",
    gradientSecondary:
      "linear-gradient(120deg, #1f262d 7%, #514695 38%, #30cee7 97%);"
  },
  grey: {
    dark: "#151a1f",
    semiDark: "#474b4f",
    lightDark: "#6f737a",
    lightGrey: "#aaaeb3",
    veryLightGrey: "#ecedef",
    light: "#f2f2f2"
  },
  font: {
    boldItalic: "Lato",
    bold: "Lato",
    lightItalic: "Lato",
    light: "Lato",
    mediumItalic: "Lato",
    medium: "Lato"
  },
  fontSize: {
    heading1: "2.5rem",
    heading2: "2rem",
    heading3: "1.75rem",
    heading4: "1.5rem",
    heading5: "1.25rem",
    heading6: "1rem",
    display1: "3.3rem",
    display2: "2.75rem",
    display3: "2.1875rem",
    display4: "1.6275rem",
    heading: ".85rem",
    headingTitle: "1.375rem",
    headingSection: "1.25rem",
    paragraph: "1rem",
    leadText: "1rem",
    muted: "0.85rem"
  }
};

export default theme;
