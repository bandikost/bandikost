// pages/api/proxy-image.js
import axios from "axios";

export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) return res.status(400).send("Missing path");

  try {
    const response = await axios({
      url: `https://image.tmdb.org/t/p/w500${path}`,
      responseType: "stream",
    });

    res.setHeader("Content-Type", response.headers["content-type"]);
    response.status(200);
    response.data.pipe(res);
  } catch (e) {
    res.status(500).send("Image fetch failed");
  }
}
