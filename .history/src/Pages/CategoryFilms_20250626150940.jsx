import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import { useRef } from 'react';

export default function CategoryFilms() {
    const { id } = useParams();
    const category = categories.find(cat => cat.id === Number(id));
    const inputRef = useRef(null)

    const handleSubmit = () => {
        
    }


        if (!category) {
        return <div>Категория не найдена</div>;
    }



    return (
    <>
        <p>{category.name}</p>
        <form>
            <input ref={inputRef} onChange={(e) => e.target.value} />
            <button onClick={handleSubmit}>Залить фильм</button>
        </form>
    </>

    )
}