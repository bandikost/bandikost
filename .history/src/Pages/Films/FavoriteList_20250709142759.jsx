// Components/FavoriteList.jsx
export default function FavoriteList({ favorites }) {
  return (
    <ul className="mt-10 md:text-2xl mx-10">
      <h1 className="center-flex font-bold text-xl md:text-3xl">Избранные:</h1>
      {favorites.map((fav) => (
        <div key={fav.id}>
          <li className="list-decimal m-3 border p-4 rounded-xl font-normal 
              shadow-[5px_5px_10px_rgba(0,0,0,0.2)] text-center bg-white space-y-2 
              text-size-small-medium hover:bg-indigo-100 transition-colors duration-300 cursor-pointer">
            {fav.name}
          </li>
        </div>
      ))}
    </ul>
  );
}
