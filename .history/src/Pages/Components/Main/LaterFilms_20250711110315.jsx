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

      <div className="flex items-center justify-center gap-1 my-10 mb-20 overflow-x-auto touch-pan-x scrollbar-hid">
        <button onClick={handlePrev} className="relative z-10">←</button>

        <ul className="flex items-center flex-row scroll-smooth snap-x snap-mandatory">
          {visibleCards.map((film, index) => (
            <li
        key={film.id}
        className="snap-center list-none flex-shrink-0 flex items-center flex-col w-56"
      >
        <FilmPoster
          className="w-56 h-auto hover:opacity-70 transition-colors duration-300 cursor-pointer border rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
          filmName={film.en || film.name}
          year={film.year}
        />
        <p className="text-ideal-phone">{film.date}</p>
      </li>
          ))}
        </ul>

        <button onClick={handleNext} className="relative z-10">→</button>
      </div>
    </>
    )
}