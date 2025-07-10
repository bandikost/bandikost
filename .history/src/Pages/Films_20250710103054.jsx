import { NavLink } from "react-router-dom"
import categories from "../Components/Arrays/categories";
import films from "../Components/Arrays/films"
import {  useState } from "react";
import filmsLater from "../Components/Arrays/filmsLater";
import MyToast from "../Components/Radix-ui/Toast";
import favorite from "../Components/Arrays/favorite";
import FilmPoster from "./Components/MicroComponents/FilmPoster";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import { Navigation } from 'swiper/modules'



export default function Films() {
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

    <h2 className="font-bold text-xl md:text-3xl">Мои рецензии к фильмам</h2>

    <h1 className=" font-semibold text-xl md:text-xl">Избранные:</h1>
<Swiper
  slidesPerView={3}
  centeredSlides={true}
  spaceBetween={1}
  navigation
  loop={true}
  modules={[Navigation]}
  className="mySwiper"
>
      <ul className="mt-10 md:text-2xl mx-10 grid grid-cols-4 ">
        {favorite.map((fav) => (
            <SwiperSlide key={fav.id} className="flex items-center flex-col mx-2 pt-2 text-size-small-medium ">
              <NavLink to={`/category/${fav.categoryId}`}>
                <FilmPoster className="w-40 hover:opacity-70 transition-colors duration-300 cursor-pointer border rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.2)]" 
                filmName={fav.name} year={fav.year} />
                </NavLink>
          </SwiperSlide>
      ))}
    </ul>
</Swiper>
      <h1 className="font-semibold text-xl md:text-xl">
            {showSelected
          ? `${showFilms}  ${showFilms < 2 ? "фильм отложен" : "фильма отложенных"}: `
          : '3 последних фильма: '}
        </h1>
    <ul className="mt-10 md:text-2xl mx-10 grid grid-cols-3">

      {(showSelected ? deferredFilms : recentFilms).map((film) => (

        <li key={film.id} className="flex items-center flex-col mx-2 pt-2 text-size-small-medium ">
          <NavLink to={`/category/${film.categoryId}`}>{film.name} {film.date >= "" ? `- ${film.date}`: ``}</NavLink>
          <FilmPoster className="w-40 hover:opacity-70 transition-colors duration-300 cursor-pointer border rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.2)]" filmName={film.name} />
        </li>

      ))}
    </ul>
   

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
