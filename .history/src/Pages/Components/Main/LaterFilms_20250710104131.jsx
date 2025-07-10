import { NavLink } from "react-router-dom"
import FilmPoster from "../MicroComponents/FilmPoster";

export default function LaterFilms({showSelected, deferredFilms, showFilms, recentFilms}) {
 
    return (
        <>
         <h1 className="font-semibold text-xl md:text-xl">
            {showSelected
          ? `${showFilms}  ${showFilms < 2 ? "фильм отложен" : "фильма отложенных"}: `
          : '3 последних фильма: '}
        </h1>
    <ul className="mt-10 md:text-2xl mx-10 grid grid-cols-3">

      {(showSelected ? deferredFilms : recentFilms).map((film) => (

        <li key={film.id} className="flex items-center flex-col mx-2 pt-2 text-size-small-medium ">
          <NavLink to={`/category/${film.categoryId}`}>
            <FilmPoster className="w-40 hover:opacity-70 transition-colors duration-300 cursor-pointer border rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.2)]" filmName={film.name} />
            <p>{film.date}</p>
          </NavLink>
        </li>

      ))}
    </ul>
    </>
    )
}