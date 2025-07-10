import { NavLink, useParams } from 'react-router-dom';
import categories from "../../Components/Arrays/categories";
import films from "../../Components/Arrays/films";
import { useState, useMemo } from 'react';

import back from "../../Images/back.png";
import FilmsSorter from './MicroComponents/FilmsSorter';
import InputSearcher from './MicroComponents/InputSearcher';

export default function CategoryFilms() {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const category = categories.find(cat => cat.id === categoryId);


  const [searchValue, setSearchValue] = useState("");

  const filmsInCategory = useMemo(() => {
    return films.filter(film => film.categoryId === categoryId);
  }, [categoryId]);

  const filteredFilms = useMemo(() => {
    return filmsInCategory.filter(film =>
      film.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }, [searchValue, filmsInCategory]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };


  return (
    <>
      <NavLink to="/films" className="fixed top-[12%] underline hover:text-blue-500 text-sm ml-3 flex items-center">
        <img src={back} loading='lazy' alt="" />Вернуться
      </NavLink>

      <h1 className="text-xl font-bold mb-2 mt-20 flex flex-col items-center justify-center">Категория: {category.name}</h1>

      <form className='center-flex'>
        <label className='center-flex'>
          <input className='mx-3 p-1 border rounded-xl pl-2' value={searchValue} onChange={handleInputChange} placeholder='Поиск по названию' />
        </label>
      </form>

      <InputSearcher filteredFilms={filteredFilms} searchValue={searchValue} />
      <FilmsSorter filmsInCategory={filmsInCategory} searchValue={searchValue}/>

    </>
  );
}
