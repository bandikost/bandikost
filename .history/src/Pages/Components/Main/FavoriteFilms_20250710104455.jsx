import favorite from "../../../Components/Arrays/favorite";
import { NavLink } from "react-router-dom"
import FilmPoster from "../MicroComponents/FilmPoster";

export default function FavoriteFilms() {

  const getWrappedIndex = (index, length) => {
  return (index + length) % length;
};

  const  CardSlider = ({currentIndex, setCurrentIndex}) => {
 
  const length = cards.length;

  const handleNext = () => {
  
       setCurrentIndex((prev) => (prev + 1) % length)
 
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const getVisibleCards = () => {
    return [
      cards[getWrappedIndex(currentIndex - 1, length)],
      cards[getWrappedIndex(currentIndex, length)],
      cards[getWrappedIndex(currentIndex + 1, length)],
    ];
  };
}

  const visibleCards = getVisibleCards();

    return (
        <>
        <h1 className=" font-semibold text-xl md:text-xl">Избранные:</h1>

      <ul className="mt-10 md:text-2xl mx-10 grid grid-cols-4 ">
        {favorite.map((fav) => (
            <li key={fav.id} className="flex items-center flex-col mx-2 pt-2 text-size-small-medium ">
              <NavLink to={`/category/${fav.categoryId}`}>
                <FilmPoster className="w-40 hover:opacity-70 transition-colors duration-300 cursor-pointer border rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.2)]" 
                filmName={fav.name} year={fav.year} />
                </NavLink>
          </li> 
      ))}
    </ul>
    </>
    )
}