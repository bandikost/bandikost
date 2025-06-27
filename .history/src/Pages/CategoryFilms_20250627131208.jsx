import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import films from "../Components/films"

export default function CategoryFilms() {
    const { id } = useParams();
    const grouped = categories.map(category => {
    const filmsInCategory = films.filter(film => film.categoryId === id);
    return {
        ...category,
        films: filmsInCategory
    };
    });

    return (
      <>
            <p class="text-xl font-bold mb-2">Категория: {grouped.name}</p>


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