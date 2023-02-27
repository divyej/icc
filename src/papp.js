import Navbar from "./Components/Navbar";
import App from "./App";
import Hero from "./Components/Hero";
import Collections from "./Components/Collections";
import Bidders from "./Components/Bidders";
import Community from "./Components/Community";
import Footer from "./Components/Footer"
import Buy from "./Components/buy";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { redirect } from "react-router-dom";

function Paap() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      
     
       <Routes>
        <Route path="/" element={<App/>}/>
       <Route path="/icc" element={<App/>}/>
        <Route path="/buy" element={<Buy/>}/>
        </Routes>
    </>
  );
}

export default Paap;