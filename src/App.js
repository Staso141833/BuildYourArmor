import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import NavigationBar from "./Components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/home" element={<Home />} />;
      </Routes>
    </div>
  );
}

export default App;
