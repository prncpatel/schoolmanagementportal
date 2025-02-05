import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#7c32ff",
    },
    secondary: {
      main: "#03dac6",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.15rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.10rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.15rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.75rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.10rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.15rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.75rem",
      },
    },
    h6: {
      fontSize: "0.95rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.05rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "0.95rem",
      "@media (min-width:600px)": {
        fontSize: "0.95rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.15rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.25rem",
      },
    },
    body2: {
      fontSize: "0.70rem",
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
      "@media (min-width:960px)": {
        fontSize: "0.80rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "0.85rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "0.90rem",
      },
    },
    // Add more typography styles as needed
  },
});

export default Theme;
