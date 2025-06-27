import { useParams } from 'react-router-dom'
import categories from "../Components/categories";
import films from "../Components/films"
import { useEffect, useState } from 'react';
import groupsByFirstLetter from '../Components/groupsLetter';

export default function CategoryFilms() {
    const { id } = useParams();
    const categoryId = parseInt(id);

    const category = categories.find(cat => cat.id === categoryId);
    const filmsInCategory = films.filter(film => film.categoryId === categoryId);

    // Сортировка по алфавиту
    const [goupedFilms, setGroupedFilms] = useState({})

    useEffect(() => {
        const grouped = groupsByFirstLetter(filmsInCategory)
        setGroupedFilms(grouped)
    }, [id])

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  

    return (
    <>
    <h1 className="text-xl font-bold mb-2 mt-20 flex flex-col items-center justify-center">Категория: {category.name}</h1>
 
        <div className='mt-10 flex flex-col items-center justify-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {sortedLetters.map(letter => (
          <div key={letter}>
            <h2 className="text-lg font-bold mb-2 border-b border-gray-300">{letter}</h2>
            <ul className="space-y-2">
              {groupedFilms[letter].map(film => (
                <li key={film.id} className="text-sm">
                  <span className="font-semibold">{film.name}</span> — <span className="text-indigo-500">{film.rate}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
            
        </div>
  
           
    </>
    )
}