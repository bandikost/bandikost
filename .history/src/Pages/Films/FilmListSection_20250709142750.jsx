
import { NavLink } from "react-router-dom";

export default function FilmListSection({ films, title }) {
  return (
    <ul className="mt-10 md:text-2xl mx-10">
      <h1 className="center-flex font-bold text-xl md:text-3xl">{title}</h1>
      {films.map((film) => (
        <div key={film.id}>
          <li className="list-decimal m-3 border p-4 rounded-xl font-normal 
              shadow-[5px_5px_10px_rgba(0,0,0,0.2)] text-center bg-white space-y-2 
              text-size-small-medium hover:bg-indigo-100 transition-colors duration-300 cursor-pointer">
            <NavLink to={`/category/${film.categoryId}`}>
              {film.name} {film.date && `- ${film.date}`}
            </NavLink>
          </li>
        </div>
      ))}
    </ul>
  );
}
