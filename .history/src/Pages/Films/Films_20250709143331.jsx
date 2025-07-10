import { useState } from "react";
import { NavLink } from "react-router-dom";

import categories from "../Arrays/categories";
import films from "../Arrays/films";
import filmsLater from "../Arrays/filmsLater";
import favorite from "../Arrays/favorite";

import FilmListSection from "../Films/FilmListSection";
import FavoriteList from "../Films/FavoriteList";
import CategoryCard from "../Films/CategoryCard";
import MyToast from "../Radix-ui/Toast";

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
          <CategoryCard key={index} category={cat} />
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
