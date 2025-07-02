import React, { Suspense,lazy } from "react";
import { Routes, Route, BrowserRouter} from "react-router";
import './App.css';
import Layout from "./Components/Layout";
import Preloader from "./Components/Animation/Preloader";

const PortfolioPage = lazy(() => import("./Pages/PortfolioPage"));
const Films = lazy(() => import("./Pages/Films"));
const Main = lazy(() => import("./Pages/Main"));
const CategoryFilms = lazy(() => import("./Pages/CategoryFilms"));
const About = lazy(() => import("./Pages/About"));



const App = () =>  {
  return (

  <Suspense fallback={<Preloader />} >
    <BrowserRouter>
      <Routes>
    
       <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />    
           <Route path="/about" element={<About />} /> 
          <Route path="/films" element={<Films />}/> 
          <Route path="/work/:id" element={<PortfolioPage />}/> 
          <Route path="/category/:id" element={<CategoryFilms />}/> 
        </Route>
        <Route path="*" element={<Main />} />
   
      </Routes>
    </BrowserRouter>
  </Suspense>
    
  )
}

export default App;
