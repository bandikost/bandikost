import React, { useEffect, useState } from "react";

const TMDB_API_KEY = "ff343ef00e8995be9c5f8c9f70862862";

function FilmPoster({ filmName, year, customImg }) {
  const [imgUrl, setImgUrl] = React.useState(null);

  React.useEffect(() => {
    if (customImg) {
      setImgUrl(customImg);
      return;
    }
    // Запрос в TMDB по имени + году, чтобы точнее искать
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${encodeURIComponent(filmName)}&year=${year || ''}`)
      .then(res => res.json())
      .then(data => {
        if (data.results?.[0]?.poster_path) {
          setImgUrl(`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`);
        }
      });
  }, [filmName, year, customImg]);

  if (!imgUrl) return <div>Загрузка...</div>;

  return <img src={imgUrl} alt={filmName} className="rounded-md mx-auto" />;
}

export default FilmPoster;
