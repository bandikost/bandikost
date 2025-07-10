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

  const deferredFilms = filmsLater.filter(f => f.name.trim() !== "").slice(0, 4);
  const recentFilms = films.slice(-3);

  return (
    <div className="m-0 flex flex-col items-center mt-20">
      <h2 className="font-bold text-xl md:text-3xl">Мои рецензии к фильмам</h2>

      <ul className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat, index) => (
          <li key={index} className="shadow hover:bg-indigo-100 m-4 border p-4 rounded-xl text-center bg-white">
            <NavLink to={`/category/${cat.id}`} className="hover:underline">
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button onClick={handleSelect} className="mb-4 underline hover:text-blue-500 text-sm">
        {showSelected ? 'Показать последние фильмы' : 'Показать отложенные фильмы'}
      </button>

      <div className="center-flex flex-col sm:flex-row">
        <FilmListSection
          films={showSelected ? deferredFilms : recentFilms}
          title={showSelected ? "Отложенные фильмы:" : "Последние фильмы:"}
        />
        <FavoriteList favorites={favorite} />
      </div>

      <MyToast />
    </div>
  );
}
