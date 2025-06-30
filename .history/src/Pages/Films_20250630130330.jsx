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

    const [showSelecteted, setShowSelecteted] = useState(false)

    const handleSelect = () => {
        setShowSelecteted(prev => !prev)
    }

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

        <div className="flex justify-between ">
            {showSelecteted === true && films !== 5 ? (
        <ul className="mt-20 md:text-2xl mx-10">
               <button onClick={handleSelect}>5 добавленных фильмов в отложенных:</button>  
                {films.slice(1, 4).map(film => (
                    <li key={film.id} className="list-decimal m-3 border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2">{film.name} - {film.date}</li>
                ))}
            </ul>
            ): (
            
        <ul className="mt-20 md:text-2xl mx-10">
                <button onClick={handleSelect}>Последние 5 добавленных фильма: </button>
                {films.slice(-5).map(film => (
                    <li key={film.id} className="list-decimal m-3 border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2">{film.name} - {film.date}</li>
                ))}
            </ul>

            )}
            

        </div>


    </div>
    
    )
}