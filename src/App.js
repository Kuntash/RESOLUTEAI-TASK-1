import { ThemeProvider } from "@mui/material";
import Login from "./Login";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
