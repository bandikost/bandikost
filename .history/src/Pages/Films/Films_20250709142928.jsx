import { useState } from "react";
import { NavLink } from "react-router-dom";

import categories from "../../Components/Arrays/categories";
import films from "../../Components/Arrays/films";
import filmsLater from "../../Components/Arrays/filmsLater";
import favorite from "../../Components/Arrays/favorite";

import FilmListSection from "../../Components/FilmListSection";
import FavoriteList from "../../Components/FavoriteList";
import MyToast from "../../Components/Radix-ui/Toast";

export default function Films() {
  const [showSelected, setShowSelected] = useState(false);
  const handleSelect = () => setShowSelected(prev => !prev);

  const deferredFilms = filmsLater
    .filter(film => film.name.trim() !== "")
    .slice(0, 4);

  const recentFilms = films.slice(-3);
  const showFilms = deferredFilms.length;

  return (
    <div className="m-0 flex flex-col items-center mt-20">
      <h2 className="font-bold text-xl md:text-3xl">Мои рецензии к фильмам</h2>

      <div className="grid mt-0 sm:mt-5 md:mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category, index) => (
          <li
            className="shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:bg-indigo-100 transition-colors duration-300 cursor-pointer m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2"
            key={index}
          >
            <NavLink className="text-size transform hover:underline" to={`/category/${category.id}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </div>

      <button onClick={handleSelect} className="mb-4 underline hover:text-blue-500 text-sm">
        {showSelected ? 'Показать последние фильмы' : 'Показать отложенные фильмы'}
      </button>

      <div className="center-flex flex-col sm:flex-row">
        <FilmListSection
          films={showSelected ? deferredFilms : recentFilms}
          title={
            showSelected
              ? `${showFilms} ${showFilms < 2 ? "фильм отложен" : "фильма отложенных"}`
              : "3 последних фильма:"
          }
        />
        <FavoriteList favorites={favorite} />
      </div>

      <MyToast />
    </div>
  );
}
