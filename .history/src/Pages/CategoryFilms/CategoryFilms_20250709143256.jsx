import { useParams, NavLink } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

import categories from "../../Arrays/categories";
import films from "../../Arrays/films";
import groupByFirstLetter from "../../groupsLetter";

import SearchInput from "../../CategoryFilms/SearchInput";
import FilmCard from "../../CategoryFilms/FilmCard";
import AlphabetGroupList from "../../CategoryFilms/AlphabetGroupList";

import back from "../../Images/back.png";

export default function CategoryFilms() {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const category = categories.find(cat => cat.id === categoryId);

  const [searchValue, setSearchValue] = useState("");
  const [groupedFilms, setGroupedFilms] = useState({});

  const filmsInCategory = useMemo(
    () => films.filter(film => film.categoryId === categoryId),
    [categoryId]
  );

  const filteredFilms = useMemo(
    () =>
      filmsInCategory.filter(film =>
        film.name.toLowerCase().startsWith(searchValue.toLowerCase())
      ),
    [searchValue, filmsInCategory]
  );

  useEffect(() => {
    const grouped = groupByFirstLetter(filmsInCategory);
    setGroupedFilms(grouped);
  }, [filmsInCategory]);

  if (!category) return <p>Категория не найдена</p>;

  return (
    <>
      <NavLink
        to="/films"
        className="mb-4 underline hover:text-blue-500 text-sm ml-3 flex items-center"
      >
        <img src={back} loading="lazy" alt="Назад" />
        Вернуться
      </NavLink>

      <h1 className="text-xl font-bold mb-2 mt-20 text-center">
        Категория: {category.name}
      </h1>

      <SearchInput value={searchValue} onChange={setSearchValue} />

      {searchValue.length > 0 ? (
        filteredFilms.length > 0 ? (
          <div className="center-flex px-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 w-full max-w-6xl mt-10">
              {filteredFilms.slice(-3).map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </ul>
          </div>
        ) : (
          <p className="center-flex px-4 mt-10">Фильм не найден</p>
        )
      ) : null}

      <AlphabetGroupList groupedFilms={groupedFilms} />
    </>
  );
}
