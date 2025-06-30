import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import './App.css';
import PortfolioPage from "./Pages/PortfolioPage";
import Films from "./Pages/Films";
import CategoryFilms from "./Pages/CategoryFilms";
import Layout from "./Components/Layout";


const App = () =>  {
  return (

  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/films" />} />    
          <Route path="/films" element={<Films />}/> 
          <Route path="/work/:id" element={<PortfolioPage />}/> 
          <Route path="/category/:id" element={<CategoryFilms />}/> 
        </Route>
        <Route to="*" element={<Films />} />
      </Routes>
    </BrowserRouter>
 
    
  )
}

export default App;
