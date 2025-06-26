import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema({
    title: String,
    categoryId: Number,
});

const Film = mongoose.models.Film || mongoose.model("Film", FilmSchema);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { title, categoryId } = req.body;

        if (!title || !categoryId) return res.status(400).json({ error: "Bad data" });

        try {
            await mongoose.connect(process.env.MONGODB_URI);
            const film = await Film.create({ title, categoryId });
            res.status(201).json(film);
        } catch (err) {
            res.status(500).json({ error: "Database error" });
        }
    } else {
        res.status(405).end("Method Not Allowed");
    }
}
