
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home.jsx';
import { Navbar } from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
        <Home></Home>
        <Navbar></Navbar>
    </div>
  );
}

export default App;
