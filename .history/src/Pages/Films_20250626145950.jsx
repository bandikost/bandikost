import  {useRef} from "react"
import { NavLink } from "react-router-dom"


const categories = [
    {id: 1, name: "Детектив"},
    {id: 2, name: "Романтика"},
    {id: 3, name: "Фантастика"},
    {id: 4, name: "Триллер"},
    {id: 5, name: "Психологическая драма"},
    {id: 6, name: "Психологический"},

]


export default function Films() {

    const inputRef = useRef(null)

    const handlerSend = () => {
        
    }

    return (
        <>
        <h1>Категории фильмов</h1>
            <div class="flex justify-center">
                {categories.map((category, index) => (
                    <li key={index}>
                        <NavLink to={`/category/${categories.id}`}>{category.name}</NavLink>
                    </li>
                ))}
                

            </div>
        </>
    )

}