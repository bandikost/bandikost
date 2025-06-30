import { NavLink } from "react-router-dom"
import categories from "../Components/categories";
import films, { lastUpdated } from "../Components/films"

export default function Films() {
    const formattedDate =  new Date(lastUpdated).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })



    return (

    <div className="m-0 flex flex-col items-center">
    <h1 className="mt-10">Последнее обновление фильма: {formattedDate}</h1>
    <h2 className="font-bold text-xl md:text-3xl">Категории фильмов</h2>
        <div class="grid grid-cols-2 mt-10 ">
            {categories.map((category, index) => (
                <li className=" ml-10 list-decimal" key={index}>
                    <NavLink className="md:text-xl transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                </li>
            ))}     
        </div>

        <div className="mt-20 md:text-2xl">
            Последние 3 добавленных фильма: 
            {films.slice(-3).map(film => (
                <li key={film.id} className="list-decimal mt-1 md:text-lg">{film.name} - {film.rate}</li>
            ))}
        </div>
    </div>
    
    )
}