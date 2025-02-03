import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Drivers from "./pages/Drivers";

const App = () => {
  return (
    <>
    <NavBar />
   

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
  
   <Footer/> 
    </>
  );
};

export default App;
