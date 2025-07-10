import React, { useEffect, useState } from "react";

const TMDB_API_KEY = "ff343ef00e8995be9c5f8c9f70862862";

function FilmPoster({ filmName, year }) {
  const [posterUrl, setPosterUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filmName) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        filmName
      )}&language=ru-RU`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
          setPosterUrl(`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`);
        } else {
          setError("Постер не найден");
          setPosterUrl(null);
        }
      })
      .catch(() => {
        setError("Ошибка при загрузке");
        setPosterUrl(null);
      })
      .finally(() => setLoading(false));
  }, [filmName, yaer]);

  if (loading) return <div>Загрузка постера...</div>;
  if (error) return <div>{error}</div>;

  return posterUrl ? (
    <img src={posterUrl} alt={`Постер фильма ${filmName}`} style={{ maxWidth: "300px" }} />
  ) : (
    <div>Постер отсутствует</div>
  );
}

export default FilmPoster;
