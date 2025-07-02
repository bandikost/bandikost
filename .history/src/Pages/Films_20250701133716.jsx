import { NavLink } from "react-router-dom"
import categories from "../Components/Arrays/categories";
import films from "../Components/Arrays/films"
import {  useState } from "react";
import filmsLater from "../Components/Arrays/filmsLater";
import MyToast from "../Components/Radix-ui/Toast";


export default function Films() {
    const [showSelected, setShowSelected] = useState(false)
    const handleSelect = () => { setShowSelected(prev => !prev) }

    const deferredFilms = filmsLater
    .filter(film => film.name.trim() !== "")
    .slice(0, 4);

    const showFilms = deferredFilms.length 
    
    const recentFilms = films.slice(-3);


    return (

    <div className="m-0 flex flex-col items-center mt-20 bg-gray-900">
    {/* <MyToolTip text="Это подсказка"></MyToolTip> */}

    <h2 className="font-bold text-xl md:text-3xl">Категории фильмов</h2>

        <div class="grid mt-0 sm:mt-5 md:mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category, index) => (
                <li className="hover:bg-indigo-100 transition-colors duration-300 cursor-pointer m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2" key={index}>
                    <NavLink className="text-size transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>
    <button onClick={handleSelect} className="mb-4 underline hover:text-blue-500 text-sm">
        {showSelected ? 'Показать последние фильмы' : 'Показать отложенные фильмы'}
    </button>
    
        <div className="center-flex">
    <ul className="mt-10 md:text-2xl mx-10">
        <h1 className="center-flex font-bold text-xl md:text-3xl">
            {showSelected
          ? `${showFilms}  ${showFilms < 2 ? "фильм отложен" : "фильма отложенных"}: `
          : '3 последних фильма: '}
        </h1>
      {(showSelected ? deferredFilms : recentFilms).map((film) => (
        <div>
        <li key={film.id} className="list-decimal m-3 border p-4 rounded-xl font-normal 
          shadow-[5px_5px_10px_rgba(0,0,0,0.2)] text-center bg-white space-y-2 text-size-small-medium hover:bg-indigo-100 transition-colors duration-300 cursor-pointer">
            
          <NavLink to={`/category/${film.categoryId}`}>{film.name} {film.date >= "" ? `- ${film.date}`: ``}</NavLink>
        </li>
        </div>
      ))}
    </ul>
  </div>


<MyToast />
    </div>
    
    )
}