import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema({
    title: String,
    categoryId: Number,
});

const Film = mongoose.models.Film || mongoose.model("Film", FilmSchema);

export default async function handler(req, res) {
  const { categoryId } = req.query;
  console.log("→ GET /api/films запрос, categoryId =", categoryId);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("   Подключено к MongoDB");
    const films = await Film.find({ categoryId: Number(categoryId) });
    console.log("   Найдено фильмов:", films.length);
    res.status(200).json(films);
  } catch (err) {
    console.error("❌ Ошибка в /api/films:", err);
    res.status(500).json({ error: "Database error", message: err.message });
  }
}

