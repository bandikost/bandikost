import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import { useRef, useState } from 'react';

export default function CategoryFilms() {
    const { id } = useParams();
    const category = categories.find(cat => cat.id === Number(id));
    const inputRef = useRef(null)
    const [films, setFilms] = useState([]);

    const handleSubmit = () => {
        e.preventDefault();

        const title = inputRef.current.value.trim();
        if (!title) return;

        // Добавляем новый фильм с автоинкрементом id
        setFilms((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                title,
            },
        ]);

        inputRef.current.value = "";
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