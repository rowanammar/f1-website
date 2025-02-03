import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Drivers from "./pages/Drivers";
import Races from "./pages/Races";
import Standings from "./pages/Standings";
import Circuits from "./pages/Circuits";

const App = () => {
  return (
    <>
    <NavBar />
   

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/Circuits" element={<Circuits />} />
        <Route path="/races" element={<Races />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
  
   <Footer/> 
    </>
  );
};

export default App;
