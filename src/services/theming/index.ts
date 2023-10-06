import { createTheme, responsiveFontSizes } from "@mui/material";

export const catskillWhite = "#F3F5F9"; // primary light blue
export const froly = "#F77D75"; // the app red and vendor red (after change)

export const blackSqueeze = "#E4E5DE";

const theme = responsiveFontSizes(
  createTheme({
    shape: {
      borderRadius: 25,
    },
    palette: {
      primary: {
        main: froly,
      },
      secondary: {
        main: catskillWhite,
      },
      text: {
        primary: "#000",
      },
      background: {
        default: catskillWhite,
      },
      action: {
        disabledBackground: catskillWhite,
        disabled: "#CACACA",
      },
    },
    spacing: 5,
    typography: {
      fontFamily: [
        "Comfortaa",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Comfortaa';
          }
        `,
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none" },
          containedPrimary: { color: "#fff" },
        },
      },
      MuiStepIcon: {
        styleOverrides: { text: { fill: "#fff" } },
      },
      MuiSwitch: {
        // styleOverrides: {
        //   thumb: {
        //     backgroundColor: froly,
        //   },
        //   track: {
        //     backgroundColor: '#F3F5F9',
        //     opacity: 1,
        //   },
        // },
      },
      MuiDrawer: {
        styleOverrides: {
          root: { zIndex: 100 },
          paper: { backgroundColor: catskillWhite, borderRight: "none" },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            paddingLeft: "1vw",
            paddingRight: "3vw",
            "&.Mui-selected": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
            "&.Mui-selected:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
            "@media (max-width: 1200px)": {
              paddingLeft: "20px",
              paddingRight: "30px",
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: "#000",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "#000",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 15,
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
    },
  })
);

export default theme;
