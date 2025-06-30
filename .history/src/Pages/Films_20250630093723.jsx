import { NavLink } from "react-router-dom"
import categories from "../Components/categories";


export default function Films() {
    const date = Date.now()

    return (

    <div className="m-0 flex flex-col items-center">
    <h1 className="mt-10">Последнее обновление фильма: {date}</h1>
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
        </div>
    </div>
    
    )
}