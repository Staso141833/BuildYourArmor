import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Login } from "./Components/Login/Login.js";
import { Register } from "./Components/Register/Register.js";
import NavigationBar from "./Components/Navbar/Navbar.js";
import { Footer } from "./Components/Footer/Footer.js";
import { ShareExperience } from "./Components/ShareExpereince/ShareExpereince.js";
import { BasicMuscles } from "./Components/BasicMuscles/BasicMuscles.js";
import { Catalog } from "./Components/Catalog/Catalog.js";
import { Details } from "./Components/Details/Details.js";
import { Trapezius } from "./Components/BasicMuscles/Trapezius/Trapezius.js";
import { Edit } from "./Components/Edit/Edit.js";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
        <Route path="/share" element={<ShareExperience/>}/>;
        <Route path="/basicMuscles" element={<BasicMuscles />} />;
        <Route path="/catalog" element={<Catalog />} />;
        <Route path="/details" element={<Details />} />;
        <Route path="/edit" element={<Edit />} />;
        <Route path="/trapezius" element={<Trapezius />} />;
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
