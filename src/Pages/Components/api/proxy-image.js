// pages/api/proxy-image.js
import axios from "axios";

export default async function handler(req, res) {
  const { path } = req.query;

  if (!path || !path.startsWith("/")) {
    return res.status(400).send("Missing or invalid path");
  }

  try {
    const imageResponse = await axios.get(`https://image.tmdb.org/t/p/w500${path}`, {
      responseType: "stream",
    });

    res.setHeader("Content-Type", imageResponse.headers["content-type"]);
    res.status(200);
    imageResponse.data.pipe(res);
  } catch (error) {
    console.error("Image proxy error:", error.message);
    res.status(500).send("Image fetch failed");
  }
}
