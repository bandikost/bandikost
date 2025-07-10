import React, { Suspense,lazy } from "react"
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/global.css'
import { Routes, Route, BrowserRouter} from "react-router";
import Layout from "./Components/Layout";
import Preloader from "./Components/Animation/Preloader";
import reportWebVitals from './reportWebVitals';
const PortfolioPage = lazy(() => import("./Pages/PortfolioPage"));
const Films = lazy(() => import("./Pages/Films"));
const Main = lazy(() => import("./Pages/Main"));
const CategoryFilms = lazy(() => import("./Pages/CategoryFilms"));
const About = lazy(() => import("./Pages/About"));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
