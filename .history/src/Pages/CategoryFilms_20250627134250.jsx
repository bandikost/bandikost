import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import films from "../Components/films"

export default function CategoryFilms() {
    const { id } = useParams();
    const categoryId = parseInt(id);

     const category = categories.find(cat => cat.id === categoryId);
    const filmsInCategory = films.filter(film => film.categoryId === categoryId);


  if (!category) {
    return <p>Категория не найдена</p>;
  }

  

    return (
      <>
            <p className="text-xl font-bold mb-2">Категория: {category.name}</p>

   <ul className='mt-10 flex items-center'>
        {filmsInCategory.map(film => (
          <li key={film.id}>{film.name} — {film.rate > 8.5 ? `${film.rate} 🌟` : "aaaaaaa"}</li>
        ))}
      </ul>
           
        </>

    )
}