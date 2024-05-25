import { createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#F97300",
    },
    secondary: {
      main: "#524C42",
    },
    info: {
      main: "#E2DFD0",
    },
    success: {
      main: "#32012F",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#F97300",
    },
    secondary: {
      main: "#1C1F25",
    },
    info: {
      main: "#E2DFD0",
    },
    success: {
      main: "#23272F",
    },
  },
});
