import { NavLink } from "react-router-dom"
import categories from "../Components/categories";
import films, { lastUpdated } from "../Components/films"
import { useState } from "react";

export default function Films() {
    const formattedDate =  new Date(lastUpdated).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })

    const [showSelected, setShowSelected] = useState(false)

    const handleSelect = () => {
        setShowSelected(prev => !prev)
    }

    const deferredFilms = films.slice(0, 3); // это фиктивно
    const recentFilms = films.slice(-5);

    return (

    <div className="m-0 flex flex-col items-center">
    <h1 className="mt-10">Последнее обновление фильма: {formattedDate}</h1>
    <h2 className="font-bold text-xl md:text-3xl">Категории фильмов</h2>
        <div class="grid grid-cols-3 mt-10 ">
            {categories.map((category, index) => (
                <li className="m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2" key={index}>
                    <NavLink className="md:text-xl transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>

        <div className="flex justify-between">
    <ul className="mt-20 md:text-2xl mx-10">
      <button
        onClick={handleSelect}
        className="mb-4 underline hover:text-blue-500"
      >
        {showSelected
          ? 'Показать последние 5 добавленных фильмов'
          : 'Показать 3 отложенных фильма'}
      </button>

        <h1 className="flex justify-center">
            {showSelected
          ? '3 отложенных фильма: '
          : '5 последних фильмов: '}
        </h1>
      {(showSelected ? deferredFilms : recentFilms).map((film) => (
        <>
       
        
        <li
          key={film.id}
          className="list-decimal m-3 border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2"
        >
          {film.name} - {film.date}
        </li>
        </>
      ))}
    </ul>
  </div>


    </div>
    
    )
}