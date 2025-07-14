import React, { useEffect, useState } from "react";

const OMDB_API_KEY = "6ef16152"

function FilmPoster({ filmName, year, className="absolute w-96" }) {
  const [posterUrl, setPosterUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


 useEffect(() => {
  
    if (!filmName) return;

    setLoading(true);        
    setError(null);  
    
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(filmName)}${year ? `&y=${year}` : ""}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
          setPosterUrl(data.Poster);
        } else {
          setError("Постер не найден");
        }
      })
      .catch(() => setError("Ошибка загрузки"));
  }, [filmName, year]);

  if (loading) return <div>Загрузка постера...</div>;
  if (error) return <div>{error}</div>;

  return posterUrl ? (
    <img src={posterUrl} className={className} alt={`Постер фильма ${filmName}`} />
  ) : (
    <div>Постер отсутствует</div>
  );
}

export default FilmPoster;
