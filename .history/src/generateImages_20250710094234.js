
import fetch from 'node-fetch';
import fs from 'fs';
import films from './Components/Arrays/films.js'; // твой исходный файл

const API_KEY = 'ff343ef00e8995be9c5f8c9f70862862';

async function fetchPosterUrl(filmName) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(filmName)}&language=ru-RU`);
  const data = await res.json();
  if (data.results && data.results.length > 0 && data.results[0].poster_path) {
    return `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
  }
  return null;
}

async function enrichFilmsWithImages() {
  const updatedFilms = await Promise.all(
    films.map(async film => {
      const img = await fetchPosterUrl(film.name);
      return { ...film, img };
    })
  );

  fs.writeFileSync('./films_with_images.js', `export default ${JSON.stringify(updatedFilms, null, 2)};`);
  console.log("✅ Файл с картинками создан: films_with_images.js");
}

enrichFilmsWithImages();
