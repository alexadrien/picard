import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E98C25",
    },
    secondary: {
      main: "#E98C25",
    },
    text: {
      primary: "#024983",
      secondary: "#024983",
    },
    action: {
      active: "#E98C25",
    },
    background: {
      paper: "#AFDDEF",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "2rem",
    },
  },
});
