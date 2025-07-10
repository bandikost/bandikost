import js from "../../Images/settings/js.svg"
import ui from "../../Images/settings/chakra.svg"
import axios from "../../Images/settings/axios.png"
import jest from "../../Images/settings/jest.webp"
import rt from "../../Images/settings/react.png"
import tailwind from "../../Images/settings/tailwind.svg"

const skills = [
    { src: js, bg: "bg-yellow-500" },
    { src: rt, bg: "bg-blue-400" },
    { src: ui, bg: "bg-teal-400" },
    { src: axios, bg: "bg-[#854195]" },
    { src: jest, bg: "bg-pink-800" },
    { src: tailwind, bg: "bg-cyan-700" },
];

export default function SteckTechology() {

    return (
         <section className="relative w-full h-100 sm:h-[300px] bg-gray-900 mt-[-100px] lg:mt-0">
        <div className="container mx-auto px-4 md:flex md:justify-start items-center flex justify-center h-full">
                <div className="ml-5 md:ml-10"><p className="font-ubuntu text-to-title text-white flex items-center justify-center text-center lg:items-start flex-col w-82 pb-5">Используемые технологии: </p> 
                    <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 w-48 sm:w-full">
                        {skills.map((skill, i) => (
                            <li key={i}>
                            <img
                                className={`w-14 h-14 sm:w-20 md:w-20 lg:w-24 xl:w-28 h-12 sm:h-20 md:h-20 lg:h-24 xl:h-28 p-0 border border-gray-900 rounded-lg object-containt ${skill.bg}`}
                                src={skill.src}
                                alt={`skill-${i}`}
                            />
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
        </section>
    )
}