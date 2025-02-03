import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Drivers from "./pages/Drivers";
import Races from "./pages/Races";


const App = () => {
  return (
    <>
    <NavBar />
   

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/cars" element={<Home />} />
        <Route path="/races" element={<Races />} />
      </Routes>
  
   <Footer/> 
    </>
  );
};

export default App;
