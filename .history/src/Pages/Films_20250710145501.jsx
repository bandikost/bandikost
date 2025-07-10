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


export default function Films({text, setText}) {
    const { currentIndex } = useFavorite();
    const [showSelected, setShowSelected] = useState(false)
    const handleSelect = () => { setShowSelected(prev => !prev) }
    const [value, setValue] = useState('')
  

    const deferredFilms = filmsLater
    .filter(film => film.name.trim() !== "")
    .slice(0, 4);

    const showFilms = deferredFilms.length 
    
    const recentFilms = films.slice(-3);

   

    return (

    <div className="m-0 flex flex-col items-center mt-12 w-full">
    {/* <MyToolTip text="Это подсказка"></MyToolTip> */}  

   <li className="list-none realtive">
    <div class="grid mt-0 sm:mt-5 md:mt-5 grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
            {categories.map((category, index) => (
                <li className="relative
                hover:bg-indigo-100 transition-colors duration-300 cursor-pointer
                 text-center font-sm " key={index}>
                    <NavLink className="text-size transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>
        <FilmPoster
          className="relative  left-1/2 -translate-x-1/2 w-[960px] h-[480px] object-cover blur "
          filmName={favorite[currentIndex].name}
          year={favorite[currentIndex].year}
        />
        
        <div className="relative right-1/8 lg:right-1/4 top-[-130px] z-10">
    <FavoriteFilms />
  </div>
      </li>
  
           <button onClick={handleSelect} className="mb-4 underline hover:text-blue-500 text-sm">
        {showSelected ? 'Показать последние фильмы' : 'Показать отложенные фильмы'}
    </button>
   
    <LaterFilms showSelected={showSelected} deferredFilms={deferredFilms} showFilms={showFilms} recentFilms={recentFilms} />
   

      <input value={value} className="border bg-gray-900" onChange={(e) => setValue(e.target.value)} /> <button onClick={handleSave}>save</button>

           

<MyToast />
    </div>
    
    )
}
