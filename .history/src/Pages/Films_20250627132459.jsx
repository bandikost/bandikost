import { NavLink } from "react-router-dom"
import categories from "../Components/categories";


export default function Films() {

    return (
        <div className="m-0 flex flex-col justify-center">
        <h1>Категории фильмов</h1>
            <div class="flex justify-center flex-col">
                {categories.map((category, index) => (
                    <li key={index}>
                        <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
                    </li>
                ))}
                

            </div>
        </div>
    )

}