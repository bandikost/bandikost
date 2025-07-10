import { useParams } from "react-router-dom";
import { useState } from "react";

import categories from "../../Components/Arrays/categories";
import films from "../../Components/Arrays/films";

import SearchBar from "../../Components/Category/SearchBar";
import FilmSearchResults from "../../Components/Category/FilmSearchResults";
import FilmListByLetter from "../../Components/Category/FilmListByLetter";
import BackButton from "../../Components/Category/BackButton";

export default function CategoryFilms() {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const category = categories.find(cat => cat.id === categoryId);

  const [searchValue, setSearchValue] = useState("");

  const filmsInCategory = films.filter(f => f.categoryId === categoryId);

  if (!category) return <p>Категория не найдена</p>;

  return (
    <>
      <BackButton />
      <h1 className="text-xl font-bold mb-2 mt-20 text-center">Категория: {category.name}</h1>
      <SearchBar value={searchValue} onChange={setSearchValue} />
      <FilmSearchResults films={filmsInCategory} searchValue={searchValue} />
      <FilmListByLetter films={filmsInCategory} />
    </>
  );
}
