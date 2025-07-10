import { useState } from "react";
import favorite from "../../../Components/Arrays/favorite";
import { NavLink } from "react-router-dom";
import FilmPoster from "../MicroComponents/FilmPoster";

export default function FavoriteFilms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = favorite;
  const length = cards.length;

  const getWrappedIndex = (index, length) => {
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
      favorite[getWrappedIndex(currentIndex - 1, length)],
      favorite[getWrappedIndex(currentIndex, length)],
      favorite[getWrappedIndex(currentIndex + 1, length)],
    ];
  };

  const visibleCards = getVisibleCards();


   return (
    <>
      {visibleCards.map((fav, index) => (
     <FilmPoster
              className="w-40 hover:opacity-90 transition duration-300 cursor-pointer border rounded-xl shadow-[8px_8px_10px_rgba(0,0,0,0.3)]"
              filmName={fav.name}
              year={fav.year}>
    <div className="w-full h-screen relative bg-black/70">
  <div className="absolute inset-0 bg-black/60"></div> {/* затемнение */}

  <div className="relative z-10 px-20 py-10 text-white flex flex-col items-center">
    <h1 className="font-bold text-3xl mb-8">Избранные:</h1>

    <div className="flex items-center justify-center gap-4">
      <button onClick={handlePrev}>←</button>

    
        <li
          key={fav.id}
          className="list-none flex items-center flex-col"
          style={{
            opacity: index === 1 ? "100%" : "30%",
            transform: index === 1 ? "scale(1)" : "scale(0.85)",
          }}
        >
          <NavLink to={`/category/${fav.categoryId}`}>
            <FilmPoster
              className="w-40 hover:opacity-90 transition duration-300 cursor-pointer border rounded-xl shadow-[8px_8px_10px_rgba(0,0,0,0.3)]"
              filmName={fav.name}
              year={fav.year}
            />
          </NavLink>
        </li>
   

      <button onClick={handleNext}>→</button>
    </div>
  </div>
</div></FilmPoster>
   ))}

   </>
  );
}