import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Login } from "./Components/Login/Login.js";
import { Register } from "./Components/Register/Register.js";
import NavigationBar from "./Components/Navbar/Navbar.js";
import { Footer } from "./Components/Footer/Footer.js";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
