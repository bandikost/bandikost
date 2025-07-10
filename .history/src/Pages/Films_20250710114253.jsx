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

    <div className="m-0 flex flex-col items-center mt-20 ">
    {/* <MyToolTip text="Это подсказка"></MyToolTip> */}

    <h2 className="font-bold text-xl md:text-3xl my-10">Мои рецензии к фильмам</h2>
    

   <li className="list-none">
        <FilmPoster
          className="blur w-full h-48 object-cover rounded-xl"
          filmName={favorite[currentIndex].name}
          year={favorite[currentIndex].year}
        />
        <FavoriteFilms />
      </li>
  
   
    <LaterFilms showSelected={showSelected} deferredFilms={deferredFilms} showFilms={showFilms} recentFilms={recentFilms} />
   

        <div class="grid mt-0 sm:mt-5 md:mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category, index) => (
                <li className="shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:bg-indigo-100 transition-colors duration-300 cursor-pointer m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2" key={index}>
                    <NavLink className="text-size transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>

    <button onClick={handleSelect} className="mb-4 underline hover:text-blue-500 text-sm">
        {showSelected ? 'Показать последние фильмы' : 'Показать отложенные фильмы'}
    </button>

<MyToast />
    </div>
    
    )
}
