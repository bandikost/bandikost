import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import { useRef, useState } from 'react';
import axios from "axios";

export default function CategoryFilms() {
    const { id } = useParams();
    const category = categories.find(cat => cat.id === Number(id));
    const inputRef = useRef(null)
    const [films, setFilms] = useState([]);

    const handleSubmit = (e) => {
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
            <p className="text-xl font-bold mb-2">Категория: {category.name}</p>

            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    ref={inputRef}
                    placeholder="Название фильма"
                    className="border px-2 py-1 mr-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Залить фильм
                </button>
            </form>

            <ul>
                {films.map((film) => (
                    <li key={film.id}>
                        <strong>{film.id}.</strong> {film.title}
                    </li>
                ))}
            </ul>
        </>

    )
}