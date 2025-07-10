
export default function FilmsSorter() {
    return (
        <>
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
        </>
    )
}