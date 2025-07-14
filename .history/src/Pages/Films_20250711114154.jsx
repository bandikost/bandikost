import { NavLink } from "react-router-dom"
import categories from "../Components/Arrays/categories";
import films from "../Components/Arrays/films"
import {  useState } from "react";
import filmsLater from "../Components/Arrays/filmsLater";
import MyToast from "../Components/Radix-ui/Toast";

import favorite from "../Components/Arrays/favorite";
import FilmPoster from "./Components/MicroComponents/FilmPoster";

import FavoriteFilms from "./Components/Main/FavoriteFilms";
import LaterFilms from "./Components/Main/LaterFilms";
import { useFavorite } from "./Components/FavoriteContext"; 
import background from './images/parallax.jpg';
import Slasher from "../Components/ComponentsSlasher/ComponentSlash";

export default function Films() {
    const { currentIndex } = useFavorite();
    const [showSelected, setShowSelected] = useState(false)
    const handleSelect = () => { setShowSelected(prev => !prev) }

    const deferredFilms = filmsLater
    .filter(film => film.name.trim() !== "")
    .slice(0, 4);

    const showFilms = deferredFilms.length 
    
    const recentFilms = films.slice(-3);

    return (

    <div className="m-0 flex flex-col items-center mt-12 w-full bg-gray-300">
    {/* <MyToolTip text="Это подсказка"></MyToolTip> */}  

   <li className="list-none realtive">
        <FilmPoster
          className="relative  left-1/2 -translate-x-1/2 w-[960px] h-[300px] sm:h-[480px] object-cover blur rounded-xl"
          filmName={favorite[currentIndex].en || favorite[currentIndex].name  }
          year={favorite[currentIndex].year}
        />
        <div className="relative right-1/8 lg:right-1/4 top-[-130px] z-10">
        
    <FavoriteFilms />
    <div class="grid mt-0 sm:mt-5 md:mt-5 grid-cols-1">
            {categories.map((category, index) => (
                <li className="shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:bg-indigo-100 transition-colors duration-300 cursor-pointer m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2" key={index}>
                    <NavLink className="text-size transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>
  </div>
      </li>
      
    <LaterFilms showSelected={showSelected} deferredFilms={deferredFilms} showFilms={showFilms} recentFilms={recentFilms} />
   <button onClick={handleSelect} className="mb-4 underline hover:text-blue-500 text-sm">
        {showSelected ? 'Показать последние фильмы' : 'Показать отложенные фильмы'}
    </button>
  
<MyToast />
    </div>
    
    )
}
