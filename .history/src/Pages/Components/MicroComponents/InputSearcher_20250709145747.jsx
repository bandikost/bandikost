import { useMemo } from "react";


export default function InputSearcher() {

     // Сначала объявляем состояние
  const [searchValue, setSearchValue] = useState("");

  // Далее используем его
  const filmsInCategory = useMemo(() => {
    return films.filter(film => film.categoryId === categoryId);
  }, [categoryId]);

     const filteredFilms = useMemo(() => {
    return filmsInCategory.filter(film =>
      film.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }, [searchValue, filmsInCategory]);

    return (
        <>
          {searchValue.length > 0 ? (
        filteredFilms.length > 0 ? (
          <div className="center-flex px-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 w-full max-w-6xl mt-10">
              {filteredFilms.slice(-3).map((film) => (
                <li
                  key={film.id}
                  className="border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2"
                >
                  <div className="text-lg">
                    {film.name} — {
                      film.rate > 8.5 ? `${film.rate} 🌟`
                        : film.rate < 6.8 ? `${film.rate} 🙄`
                        : `${film.rate} ⭐`
                    }
                  </div>
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
      ) : null}

      </>
    )
    
}