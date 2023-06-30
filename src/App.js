import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>;
        <Route path="/nav" element={<Navbar/>}/>;
      </Routes>
    </div>
  );
}

export default App;
