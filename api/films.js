import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema({
    title: String,
    categoryId: Number,
});

const Film = mongoose.models.Film || mongoose.model("Film", FilmSchema);

export default async function handler(req, res) {
    const { categoryId } = req.query;

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const films = await Film.find({ categoryId: Number(categoryId) });
        res.status(200).json(films);
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
}
