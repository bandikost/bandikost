import projects from "../../../Components/Arrays/projects";
import { NavLink } from "react-router-dom";

export default function ProjectSection() {

    return (
        
         <section className="relative w-full h-100 mt-[-100px] sm:mt-[-150px] md:mt-[-100px] flex flex-col justify-end bg-gray-900">
                    <div className="container mx-auto px-4 md:flex md:items-end md:flex-col h-full">
                        <p className="font-ubuntu text-ideal-phone sm:text-[2rem] text-white text-center w-82">Проекты, которые я создал: </p> 
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {projects.map((proj) => (
                                    <li className="text-white flex flex-col items-center justify-between list-none  font-ubuntu text-ideal-phone sm:text-sm md:text-size-small-medium"  key={proj.id}>
                                        <p className="border rounded-xl p-5 md:h-40 md:w-40 w-48 h-48 mt-5 mb-1" style={{ backgroundImage: `url(${proj.src})` }}
                                        >{proj.name}</p>
                                         <NavLink to={`work/${proj.id}`} className="text-low-size text-white">→ <span className="transform duration-100 underline hover:text-indigo-300">Перейти в раздел</span></NavLink>
                                    </li>
        
                                ))}
                            </ul>
                        </div>
                </section>
    )
}