import favorite from "../../../Components/Arrays/favorite";
import { NavLink } from "react-router-dom";
import FilmPoster from "../MicroComponents/FilmPoster";
import { useFavorite } from "../FavoriteContext"; 

export default function FavoriteFilms() {
  const { currentIndex, setCurrentIndex } = useFavorite();
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

  if (currentIndex === undefined || currentIndex === null) return null; 

  const visibleCards = getVisibleCards();

  return (
    <>
      <h1 className="top-28 font-ubuntu text-xl md:text-lg  relative z-10 ">Избранные:</h1>

      <div className="flex items-center justify-center gap-1 mt-10">
        <button onClick={handlePrev} className="relative z-10"> ← </button>

        {visibleCards.map((fav, index) => (
          <li
            key={fav.id}
            className="list-none flex items-center flex-col text-size-small-medium"
            style={{
              opacity: index === 1 ? "100%" : "30%",
              transform: index === 1 ? "scale(1.1)" : "scale(0.85)",
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
        <button onClick={handleNext} className="relative z-10"> → </button>

      </div>
 
    </>
  );
}
