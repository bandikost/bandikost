import { NavLink, useParams, Link } from 'react-router-dom'
import categories from "../Components/Arrays/categories";
import films from "../Components/Arrays/films"
import { useEffect, useState, useMemo } from 'react';
import groupsByFirstLetter from '../Components/groupsLetter';
import back from"../Images/back.png"


export default function CategoryFilms() {
    const { id } = useParams();
    const categoryId = parseInt(id);
    const category = categories.find(cat => cat.id === categoryId);


    // Сортировка по алфавиту
    const [groupedFilms, setGroupedFilms] = useState({})

    const filmsInCategory = useMemo(() => {
     return films.filter(film => film.categoryId === categoryId);
    }, [categoryId])

    useEffect(() => {
        
        const grouped = groupsByFirstLetter(filmsInCategory);
        setGroupedFilms(grouped);
    }, [filmsInCategory])

    // Поиск по названию
    
    const [searchValue, setSearchValue] = useState("");

    const filteredFilms = useMemo(() => {
    return filmsInCategory.filter(film => 
      film.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }, [searchValue, filmsInCategory]);

    const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    };

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  const sortedLetters = Object.keys(groupedFilms).sort((a, b) => a.localeCompare(b))

    return (
    <>
    <NavLink to="/films" className="mb-4 underline hover:text-blue-500 text-sm ml-3 flex items-center"><img src={back} loading='lazy' alt="" />Вернуться</NavLink>
    <h1 className="text-xl font-bold mb-2 mt-20 flex flex-col items-center justify-center">Категория: {category.name}</h1>
    <form className='center-flex'>
        <label className='center-flex'>
            <input className='mx-3 p-1 border rounded-xl pl-2' value={searchValue} onChange={handleInputChange} placeholder='Поиск по названию' />
        </label>
    </form>


{searchValue.length > 0 ? (
   filteredFilms.length > 0 ? (
  <div className="center-flex px-4">
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 w-full max-w-6xl mt-10">
      {filteredFilms.slice(-3).map((film) => (
        <li
          key={film.id}
          className="border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2"
        >
          <div className="text-lg">{film.name} — {film.rate > 8.5 ? `${film.rate} 🌟`: `${film.rate} ⭐` && film.rate < 6.8 ? `${film.rate} 🙄`: `${film.rate} ⭐`}</div>
          <span className="text-sm text-gray-500 block">
            Фильм находится в списке
          </span>
        </li>
      ))}
    </ul>
  </div>
) : (
  <p className="center-flex px-4 mt-10">Фильм не найден</p>
)
) :  null}



        <div className='mt-10 flex flex-col items-center justify-center mb-10'>
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
                    <p className='p-1 font-semibold md:text-xl'> {film.rate > 8.5 ? `${film.rate} 🌟`: `${film.rate} ⭐` && film.rate < 6.8 ? `${film.rate} 🙄`: `${film.rate} ⭐`}</p>
                  </div>
                      

                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
            
        </div>
  
           
    </>
    )
}