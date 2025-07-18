import { NavLink } from "react-router-dom"
import categories from "../Components/Arrays/categories";
import films from "../Components/Arrays/films"
import {  useState, useEffect } from "react";
import filmsLater from "../Components/Arrays/filmsLater";
import MyToast from "../Components/Radix-ui/Toast";


export default function Films() {
    const [showSelected, setShowSelected] = useState(false)
    const handleSelect = () => { setShowSelected(prev => !prev) }


    
    useEffect(() => {
        const deferredFilms = filmsLater.slice(0, 3); 
        if(deferredFilms < 3) {
            filmsLater.slice(0, 2)
        }
        else {
            
        }
    }, [])
    

    const recentFilms = films.slice(-5);

    

    return (

    <div className="m-0 flex flex-col items-center">
    {/* <MyToolTip text="Это подсказка"></MyToolTip> */}

    <h2 className="font-bold text-xl md:text-3xl">Категории фильмов</h2>
    <button
        onClick={handleSelect}
        className="mb-4 underline hover:text-blue-500 text-sm"
      >
        {showSelected
          ? 'Показать последние фильмы'
          : 'Показать отложенные фильмы'}
      </button>
        <div class="grid grid-cols-3 mt-5 ">
            {categories.map((category, index) => (
                <li className="hover:bg-indigo-100 transition-colors duration-300 cursor-pointer m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2" key={index}>
                    <NavLink className="md:text-xl transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>

        <div className="center-flex">
    <ul className="mt-10 md:text-2xl mx-10">
        <h1 className="center-flex font-bold text-xl md:text-3xl">
            {showSelected
          ? '3 отложенных фильма: '
          : '5 последних фильмов: '}
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