import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import { useRef } from 'react';

export default function CategoryFilms() {
    const { id } = useParams();
    const category = categories.find(cat => cat.id === Number(id));
    const inputRef = useRef(null)




        if (!category) {
        return <div>Категория не найдена</div>;
    }



    return (
    <>
        <p>{category.name}</p>
    </>

    )
}