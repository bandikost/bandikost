import { useEffect, useState } from 'react';
import groupsByFirstLetter from '../../../Components/Arrays/groupsLetter';
import { Link } from 'react-router-dom';


export default function FilmsSorter({ filmsInCategory, searchValue }) {


     // Сортировка по алфавиту


  const [groupedFilms, setGroupedFilms] = useState({});

  useEffect(() => {
    const grouped = groupsByFirstLetter(filmsInCategory);
    setGroupedFilms(grouped);
  }, [filmsInCategory]);

  const sortedLetters = Object.keys(groupedFilms).sort((a, b) =>
    a.localeCompare(b)
  );

  const getRatingEmoji = (rate) => {
    if (rate > 8.5) return `${rate} 🌟`;
    if (rate < 6.8) return `${rate} 🙄`;
    return `${rate} ⭐`;
  };


    return (
    
          <div className='mt-10 flex flex-col items-center justify-center mb-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
       {sortedLetters.map(letter => (
          <div key={letter}>
            <h2 className="text-lg font-bold mb-2 border-b border-gray-300">{letter}</h2>
            <div className="max-h-[230px] overflow-y-auto">
              <ul className="space-y-2">
                {groupedFilms[letter].map(film => (
                  <li key={film.id} className="text-sm flex mb-8 flex-col">

                    <p className='p-1 md:text-xl font-bold'>{film.name}
                      <Link target='_blank' to={film.link} className='font-bold text-xs ml-3 w-56 sm:w-96 font-light text-indigo-400 underline hover:text-blue-700'>Перейти на imdb</Link>
                    </p>
                    
                  <div className='flex'>
                    <p className='text-sm ml-4 mt-2 w-56 sm:w-96 font-light '>{film.comment}: 
                      <span className='text-xs ml-2 font-bold transform underline text-indigo-400'>{film.date}</span>
                    </p>
                    <p className='p-1 font-semibold md:text-xl'> {getRatingEmoji(film.rate)}</p>
                  </div>
                      

                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
            </div>    
        </div>
    )
}