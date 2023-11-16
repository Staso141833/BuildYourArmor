import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Login } from "./Components/Login/Login.js";
import { Register } from "./Components/Register/Register.js";
import NavigationBar from "./Components/Navbar/Navbar.js";
import { Footer } from "./Components/Footer/Footer.js";
import { Create } from "./Components/Create/Create.js";
import { BasicMuscles } from "./Components/BasicMuscles/BasicMuscles.js";
import { Catalog } from "./Components/Catalog/Catalog.js";
import { Details } from "./Components/Details/Details.js";
import { Trapezius } from "./Components/BasicMuscles/Trapezius/Trapezius.js";
import { Edit } from "./Components/Edit/Edit.js";
import { Back } from "./Components/BasicMuscles/Back/Back.js";
import { Biceps } from "./Components/BasicMuscles/Arms/Biceps/Biceps.js";
import { Triceps } from "./Components/BasicMuscles/Arms/Triceps/Triceps.js";
import { Forearms } from "./Components/BasicMuscles/Arms/Forearms/Forearms.js";
import { Chest } from "./Components/BasicMuscles/Chest/Chest.js";
import { DeltoidMuscle } from "./Components/BasicMuscles/Deltoid/Deltoid.js";
import { Abs } from "./Components/BasicMuscles/Abs/Abs.js";
import { Legs } from "./Components/BasicMuscles/Legs/Legs.js";
import { Calves } from "./Components/BasicMuscles/Legs/Calves.js";
import { IncreaseIntensity } from "./Components/IncreaseIntensity/IncreaseIntensity.js";
import { PublicationOwner } from "./common/PublicationOwner.js";
import { PublicationProvider } from "./contexts/PublicationContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Paper } from "@mui/material";

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

            <Routes>
              <Route path="/" element={<Home />} />;
              <Route path="/home" element={<Home />} />;
              <Route path="/login" element={<Login />} />;
              <Route path="/register" element={<Register />} />;
              <Route path="/create" element={<Create />} />;
              <Route path="/basicMuscles" element={<BasicMuscles />} />;
              <Route path="/catalog" element={<Catalog />} />;
              <Route path="/catalog/:publicationId" element={<Details />} />;
              <Route
                path="/catalog/:publicationId/edit"
                element={
                  <PublicationOwner>
                    <Edit />
                  </PublicationOwner>
                }
              />
              <Route path="/trapezius" element={<Trapezius />} />;
              <Route path="/deltoid" element={<DeltoidMuscle />} />;
              <Route path="/back" element={<Back />} />;
              <Route path="/biceps" element={<Biceps />} />;
              <Route path="/triceps" element={<Triceps />} />;
              <Route path="/forearms" element={<Forearms />} />;
              <Route path="/chest" element={<Chest />} />;
              <Route path="/abs" element={<Abs />} />;
              <Route path="/legs" element={<Legs />} />;
              <Route path="/calves" element={<Calves />} />;
              <Route path="/intensity" element={<IncreaseIntensity />} />;
            </Routes>

            <Footer></Footer>
          </div>
        </PublicationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
