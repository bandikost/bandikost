import { NavLink } from "react-router-dom"
import categories from "../Components/categories";


export default function Films() {

    return (
        <div className="m-0 flex flex-col items-center">
        <h1 className="font-bold text-xl">Категории фильмов</h1>
            <div class="flex justify-center flex-col">
                {categories.map((category, index) => (
                    <li className="list-decimal" key={index}>
                        <NavLink className="md:text-xl hover:transform underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                    </li>
                ))}
                

            </div>
        </div>
    )

}