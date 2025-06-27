import { NavLink } from "react-router-dom"
import categories from "../Components/categories";


export default function Films() {

    return (
        <div className="m-0 flex flex-col items-center">
        <h1 className="font-bold text-xl md:text-3xl">Категории фильмов</h1>
            <div class="grid grid-cols-2 mt-10 ">
                {categories.map((category, index) => (
                    <li className="list-decimal" key={index}>
                        <NavLink className="md:text-xl transform hover:underline ml-10" to={`/category/${category.id}`}>{category.name}</NavLink>
                    </li>
                ))}
                
                
            </div>
            <div className="mt-20 md:text-2xl">
                    Последние 3 добавленных фильма:
                    
                </div>
        </div>
    )

}