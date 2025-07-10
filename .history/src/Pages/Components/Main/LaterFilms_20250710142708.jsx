import { NavLink } from "react-router-dom"
import FilmPoster from "../MicroComponents/FilmPoster";
import { useState } from "react";

export default function LaterFilms({showSelected, deferredFilms, showFilms, recentFilms}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  
  const cards = showSelected ? deferredFilms : recentFilms;
  const length = cards.length;

  const getWrappedIndex = (index) => {
    return (index + length) % length;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const getVisibleCards = () => {
  return [
    cards[getWrappedIndex(currentIndex - 1)],
    cards[getWrappedIndex(currentIndex)],
    cards[getWrappedIndex(currentIndex + 1)],
  ];
};

const visibleCards = getVisibleCards();

 
    return (
        <>
      <h1 className="font-semibold text-xl md:text-xl ">
        {showSelected
          ? `${showFilms} ${showFilms < 2 ? "фильм отложен" : "фильма отложенных"}: `
          : "3 последних фильма:"}
      </h1>

      <div className="flex items-center justify-center gap-1 my-10">
        <button onClick={handlePrev} className="relative z-10">←</button>

        <ul className="flex items-center flex-row">
          {visibleCards.map((film, index) => (
            <li
              key={film.id}
              className="list-none flex items-center flex-col text-size-small-medium"
              style={{
                opacity: index === 1 ? "100%" : "30%",
                transform: index === 1 ? "scale(1.1)" : "scale(0.85)",
                transition: "all 0.3s",
              }}
            >
              <NavLink className="flex flex-col items-center" to={`/category/${film.categoryId}`}>
                <FilmPoster
                  className="w-40 hover:opacity-70 transition-colors duration-300 cursor-pointer border rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
                  filmName={film.name}
                />
                <p className="text-ideal-phone">{film.date}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <button onClick={handleNext} className="relative z-10">→</button>
      </div>
    </>
    )
}