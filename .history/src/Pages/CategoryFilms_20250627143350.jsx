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
            <ul>
                {filmsInCategory.map(film => (
                <li key={film.id} className='flex mb-8'>
                    <p className='p-1 md:text-xl flex flex-col'>{film.name}: 
                        <span className='text-sm ml-4 mt-2 w-96'>{film.comment}: <span className='text-xs ml-2 font-bold transform underline text-indigo-400'>{film.date}</span></span>
                    </p>
                    <p className='p-1 font-semibold md:text-xl'> {film.rate > 8.5 ? `${film.rate} 🌟` : `${film.rate} ⭐` && film.rate < 6 ? `${film.rate} 🙄` : `${film.rate} ⭐`}</p>
                    
                </li>
                ))}
            </ul>
            
        </div>
  
           
    </>
    )
}