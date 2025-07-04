import { NavLink } from "react-router-dom"
import categories from "../../Components/Arrays/categories";
import menu from "../../Images/menu.png";
import back from "../../Images/back.png";
import { useState } from "react";


export default function Navcategory({ showSelected, setShowSelected, children }) {
    const handleSelect = () => { setShowSelected(prev => !prev) }
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open); 
    }

    return (
   
        <div class="fixed bottom-0 h-screen left-0 w-full sm:w-auto z-50 bg-indigo-200">
{open && (
                  <ul className="flex flex-col mt-[62px] sm:mt-[60px] md:mt-[60px] space-y-2">
                    {categories.map((category, index) => (
                        <li className=" hover:bg-indigo-100 transition-colors duration-300 cursor-pointer px-3 pb-1 sm:pb-4 sm:px-5 md:px-5 list-none  
                        font-medium  space-y-2" key={index}>
                            <NavLink className="text-for-sups sm:text-ideal-phone md:text-sm lg:text-lg transform hover:underline" to={`/category/${category.id}`}>{category.name}</NavLink>
                        </li>
                    ))}
                    <button onClick={handleSelect} className="mb-4 mr-2 underline hover:text-blue-500 text-sm">
            {showSelected ? 'Последние фильмы' : 'Отложенные фильмы'}
 
        </button> 
                  </ul>
)}
                  {children}
                 
                    <button className="fixed bottom-[10px] left-2" onClick={handleClick}>
                        {open ?  <img src={back} className="w-8" alt="Закрыть" /> : <img className="w-8" src={menu} alt="Открыть" />}
                    </button>
                 
                </div>
      
    );
}