import { useState } from "react";
import favorite from "../../../Components/Arrays/favorite";
import { NavLink } from "react-router-dom";
import FilmPoster from "../MicroComponents/FilmPoster";

export default function FavoriteFilms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = favorite.length;

  const getWrappedIndex = (index, length) => (index + length) % length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const getVisibleCards = () => [
    favorite[getWrappedIndex(currentIndex - 1, length)],
    favorite[getWrappedIndex(currentIndex, length)],
    favorite[getWrappedIndex(currentIndex + 1, length)],
  ];

  const visibleCards = getVisibleCards();

  // Берём текущий слайд, чтобы поставить фон
  const currentSlide = favorite[currentIndex];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentSlide.imageUrl})`, // Здесь у тебя должен быть путь к картинке
      }}
    >
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Контейнер для слайдера, поверх баннера */}
      <div className="relative z-10 px-20 py-10 text-white flex flex-col items-center h-full justify-center">
        <h1 className="font-bold text-3xl mb-8">Избранные:</h1>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="text-3xl font-bold hover:text-gray-300 transition"
          >
            ←
          </button>

          {visibleCards.map((fav, index) => (
            <li
              key={fav.id}
              className="list-none flex flex-col items-center"
              style={{
                opacity: index === 1 ? 1 : 0.3,
                transform: index === 1 ? "scale(1)" : "scale(0.85)",
                transition: "all 0.3s ease",
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
          ))}

          <button
            onClick={handleNext}
            className="text-3xl font-bold hover:text-gray-300 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
