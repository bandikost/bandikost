import { Link } from 'react-router-dom';

export default function FilmCard({ film }) {
  const emoji =
    film.rate > 8.5 ? `🌟` :
    film.rate < 6.8 ? `🙄` :
    `⭐`;

  return (
    <li className="border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2">
      <div className="text-lg">
        {film.name} — {film.rate} {emoji}
      </div>
      <span className="text-sm text-gray-500 block">
        Фильм находится в списке
      </span>
    </li>
  );
}
