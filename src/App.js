import "./App.css";
import NavigationBar from "./Components/Navbar/Navbar.js";
import { Footer } from "./Components/Footer/Footer.js";
import { PublicationProvider } from "./contexts/PublicationContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { AnimatedRoutes } from "./Components/AnimatedRoutes/AnimatedRoutes.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const onClickThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AuthProvider>
        <PublicationProvider>
          <CssBaseline></CssBaseline>
          <div className="App">
            <NavigationBar
              checked={darkMode}
              onClickThemeChange={onClickThemeChange}
            />
            <main id="main-content">
              <AnimatedRoutes></AnimatedRoutes>
            </main>

            <Footer></Footer>
          </div>
        </PublicationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
