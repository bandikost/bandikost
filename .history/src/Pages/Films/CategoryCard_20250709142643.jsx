import { NavLink } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <li className="shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:bg-indigo-100 transition-colors duration-300 cursor-pointer m-4 list-decimal border p-4 rounded-xl shadow text-center font-medium bg-white space-y-2">
      <NavLink className="text-size transform hover:underline" to={`/category/${category.id}`}>
        {category.name}
      </NavLink>
    </li>
  );
}
