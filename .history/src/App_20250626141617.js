import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import './App.css';
import Main from "./Pages/Main";
import PortfolioPage from "./Pages/PortfolioPage";
import Films from "./Pages/Films";


const App = () =>  {
  return (

  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />    
        <Route path="/main" element={<Main />}/> 
        <Route path="/films" element={<Films />}/> 
        <Route path="/work/:id" element={<PortfolioPage />}/> 
      </Routes>
    </BrowserRouter>
 
    
  )
}

export default App;
