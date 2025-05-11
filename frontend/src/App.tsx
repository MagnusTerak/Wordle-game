import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import InfoSite from "./pages/InfoSite";
import Game from "./pages/Game";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27272b",
      dark: "#0066CC",
    },
    text: {
      primary: "#F5F5F5",
    },
  },

  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      paddingBottom: "1rem",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      paddingBottom: "2%",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "0 2% 0 2%",
          border: "2px solid #1a1a1d",
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
          "&:hover": {
            backgroundColor: "#1a1a1d",
            border: "2px solid #F5F5F5",
          },
          color: "#f5f5f5",

          "&.Mui-disabled": {
            color: "lightgrey"
          }
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#f5f5f5"
        } 
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#f5f5f5",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#f5f5f5"
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#ccc"
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#f2ff00"
          }
        },
        track: {
          opacity: 0.2,
          backgroundColor: "#fff",
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.7,
            backgroundColor: "#fff"
          }
        }
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="info" element={<InfoSite />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
