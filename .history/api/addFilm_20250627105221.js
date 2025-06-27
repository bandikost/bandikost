import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema({
    title: String,
    categoryId: Number,
});

const Film = mongoose.models.Film || mongoose.model("Film", FilmSchema);

export default async function handler(req, res) {
  console.log("→ POST /api/addFilm, тело:", req.body);
  if (req.method === "POST") {
    const { title, categoryId } = req.body;
    if (!title || categoryId == null) {
      console.log("   🚫 Плохие данные:", title, categoryId);
      return res.status(400).json({ error: "Bad data" });
    }
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("   Подключено к MongoDB");
      const film = await Film.create({ title, categoryId });
      console.log("   Создан фильм:", film);
      return res.status(201).json(film);
    } catch (err) {
      console.error("❌ Ошибка в /api/addFilm:", err);
      return res.status(500).json({ error: "Database error", message: err.message });
    }
  }
  // ...
}

