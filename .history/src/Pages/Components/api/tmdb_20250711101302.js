// pages/api/tmdb.js
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;

export default async function handler(req, res) {
  const { query, year } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    const tmdbResponse = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: API_KEY,
        query,
        year,
        language: "ru-RU",
      },
    });

    res.status(200).json(tmdbResponse.data);
  } catch (error) {
    console.error("TMDB API error:", error.message);
    res.status(500).json({ error: "Failed to fetch from TMDB" });
  }
}
