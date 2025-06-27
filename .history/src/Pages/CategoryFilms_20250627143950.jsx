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
    const [groupedFilms, setGroupedFilms] = useState({})

    useEffect(() => {
        const grouped = groupsByFirstLetter(filmsInCategory);
        setGroupedFilms(grouped);
    }, [filmsInCategory])

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  const sortedLetters = Object.keys(groupedFilms).sort((a, b) => a.localeCompare(b))

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
                  <p className='p-1 md:text-xl flex flex-col'>{film.name}: 
                        <span className='text-sm ml-4 mt-2 w-96'>{film.comment}: <span className='text-xs ml-2 font-bold transform underline text-indigo-400'>{film.date}</span></span>
                    </p>
                    <p className='p-1 font-semibold md:text-xl'> {film.rate > 8.5 ? `${film.rate} 🌟`: `${film.rate} ⭐` && film.rate < 6 ? `${film.rate} 🙄`: `${film.rate} ⭐`}</p>
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