import "./App.css";
import MiniDrawer from "./MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./Theme/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className="App">
        <MiniDrawer />
      </div>
    </ThemeProvider>
  );
}

export default App;
