import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicStepperForm from "./BasicStepperForm";

function App() {
  const theme = createTheme({
    palette: {
      // primary: { main: "#3f9c35" },
      // secondary: { main: "#0075b0" },
      // info: { main: "#dbe8f3", contrastText: "#0075b0", dark: "#a1c5e0" },
      // warning: { main: "#002244", contrastText: "#fff", dark: "#005c84" },
      primary: { main: "#016A70" },
      secondary: { main: "#C70039" },
      info: { main: "#dbe8f3", contrastText: "#0075b0", dark: "#a1c5e0" },
      warning: { main: "#002244", contrastText: "#fff", dark: "#005c84" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BasicStepperForm />
    </ThemeProvider>
  );
}

export default App;
