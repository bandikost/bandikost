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
      <h1 className="font-semibold text-xl md:text-xl">Избранные:</h1>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          className="hover:bg-white transition duration-200 border border-2 border-slate-100 rounded-lg px-4 py-2"
          onClick={handlePrev}
        >
          ← Назад
        </button>

        {visibleCards.map((fav, index) => (
          <li
            key={fav.id}
            className="list-none flex items-center flex-col text-size-small-medium"
            style={{
              padding: "10px",
              border: "2px solid",
              opacity: index === 1 ? "100%" : "50%",
              borderColor: index === 1 ? "#1d6e93" : "#fff",
              width: "225px",
              height: "350px",
              borderRadius: "7px",
              transform: index === 1 ? "scale(1.1)" : "scale(0.85)",
              transition: "transform 0.5s ease",
              backgroundColor: "#fff",
              fontSize: index === 1 ? "14px" : "10px",
              boxShadow:
                index === 1
                  ? "0px 0px 15px rgba(30, 41, 59, 0.3)"
                  : "5px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <NavLink to={`/category/${fav.categoryId}`}>
              <FilmPoster
                className="w-40 hover:opacity-70 transition duration-300 cursor-pointer border rounded-xl shadow"
                filmName={fav.name}
                year={fav.year}
              />
            </NavLink>
            <p className="mt-2 text-center">{fav.name}</p>
          </li>
        ))}

        <button
          className="hover:bg-white transition duration-200 border border-2 border-slate-100 rounded-lg px-4 py-2"
          onClick={handleNext}
        >
          Вперёд →
        </button>
      </div>
    </>
  );
}
