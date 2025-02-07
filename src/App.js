import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import './App.css';
import Main from "./Pages/Main";
import PortfolioPage from "./Pages/PortfolioPage";


const App = () =>  {
  return (

  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />    
        <Route path="/main" element={<Main />}/> 
        <Route path="/work/:id" element={<PortfolioPage />}/> 
      </Routes>
    </BrowserRouter>
 
    
  )
}

export default App;
