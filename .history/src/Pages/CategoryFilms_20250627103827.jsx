import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import { useRef, useState, useEffect } from 'react';
import axios from "axios";

export default function CategoryFilms() {
    const { id } = useParams();
    const category = categories.find(cat => cat.id === Number(id));
    const inputRef = useRef(null)
    const [films, setFilms] = useState([]);


    useEffect(() => {
        axios
        .get(`/api/films?categoryId=${id}`)
        .then((res) => setFilms(res.data))
        .catch((err) => console.log(`Ошибка, фильм не найден`, err))
    }, [id])

   const handleSubmit = async (e) => {
        e.preventDefault();
        const title = inputRef.current.value.trim();
        if (!title) return;

        const newFilm = { title, categoryId: Number(id) };
        console.log("Отправка фильма:", newFilm);

        try {
            const res = await axios.post("/api/addFilm", newFilm);
            setFilms((prev) => [...prev, res.data]);
            inputRef.current.value = "";
        } catch (err) {
            console.error("Ошибка при добавлении фильма", err);
        }
    };



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