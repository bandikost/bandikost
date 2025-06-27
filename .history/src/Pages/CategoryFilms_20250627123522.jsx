import { useParams } from 'react-router-dom'
import categories from "../Components/categories";

export default function CategoryFilms() {
    const { id } = useParams();
    const grouped = categories.map(category => {
    const filmsInCategory = films.filter(film => film.categoryId === category.id);
    return {
        ...category,
        films: filmsInCategory
    };
    });

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
               {grouped.map(category => (
  <div key={category.id}>
    <h2>{category.name}</h2>
    <ul>
      {category.films.map(film => (
        <li key={film.id}>{film.name} — {film.rate}</li>
      ))}
    </ul>
  </div>
))}
            </ul>
        </>

    )
}