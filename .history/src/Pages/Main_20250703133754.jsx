import { Suspense, useLayoutEffect, lazy } from "react";
import s from './modules/Main.module.css'; 
import SoloRiver from "../Images/Main/SoloRiver.jpg"
import js from "../Images/settings/js.svg"
import ui from "../Images/settings/chakra.svg"
import axios from "../Images/settings/axios.png"
import jest from "../Images/settings/jest.webp"
import rt from "../Images/settings/react.png"
import tailwind from "../Images/settings/tailwind.svg"
import Preloader from "../Components/Animation/Preloader";
import Slasher from "../Components/ComponentsSlasher/ComponentSlash";
import projects from "../Components/Arrays/projects";
import { NavLink } from "react-router-dom";

const MainVideo = lazy(() => import  ("./Components/MainVideoSection"));
const VantaBackground= lazy(() => import  ("../Components/Animation/VantaBackground"));

const skills = [
    { src: js, bg: "bg-yellow-500" },
    { src: rt, bg: "bg-blue-400" },
    { src: ui, bg: "bg-teal-400" },
    { src: axios, bg: "bg-[#854195]" },
    { src: jest, bg: "bg-pink-800" },
    { src: tailwind, bg: "bg-cyan-700" },
];




const Main = () => {

useLayoutEffect(() => {
    document.title = 'bandikost devolper | Главная';
}, []);



    return (
       <>
      
    <Suspense fallback={<Preloader />}>          
         <VantaBackground>
            <section className={`h-12 ${s.parallax}`}>
                <div className={`flex flex-col items-center md:flex-row sm:mt-[0px] md:mt-[100px] ${s.welcomeSection}`}>                 
                    <div className={`font-normal ml-5 w-[300px] sm:w-[400px] ${s.title}`} >
                        <h1 className="font-ubuntu text-size-small-medium"><span className="font-semibold">Добро пожаловать</span> ко мне в гости!</h1>
                        <p className="font-ubuntu text-size-small-medium"> Здесь вы сможете узнать информацию обо мне как о человеке, специалисте и, <span style={{textDecoration: "underline"}}>возможно</span>, вашем будущем коллеге.</p>
                        <p className="font-ubuntu text-size-small-medium"> А также во всех деталях увидеть мои коммерческие проекты и те, которые я создавал для улучшения своих навыков.</p>
                        <p className="font-ubuntu text-low-size"><sup>* </sup>Не удивляйтесь многим разделам, которые здесь могут присутствовать.</p>
                    </div>
                    <img className=" w-56 h-56 mt-12 sm:mt-10 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-72 lg:h-72" src={SoloRiver} loading="lazy" alt="My archive" />
                </div>                
            </section>
        </VantaBackground>
            <Slasher >
                <div className="w-56 absolute mt-[-14px] sm:mt-[-14px] md:mt-[-17px] left-1/2 transform -translate-x-1/2 bg-indigo-300 z-10 center-flex rounded-full">
                            <p className="center-flex text-gray-900 text-size-small-medium p-2 font-ubuntu mt-[-3px]">
                                Раздел с технологиями
                            </p>
                </div>
            </Slasher>  
    </Suspense>  
                 <Suspense fallback={<Preloader />}>
                    <MainVideo />
                </Suspense>
                
        <section className="relative w-full h-100 sm:h-[300px] bg-gray-900">
        <div className="container mx-auto px-4 md:flex md:justify-end items-center flex justify-center h-full">
                <div className="ml-5 md:ml-10"><p className="font-ubuntu text-lg sm:text-size text-white text-center sm:text-right pb-5 w-full">Используемые технологии: </p> 
                    <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 w-48 sm:w-full">
                        {skills.map((skill, i) => (
                            <li key={i}>
                            <img
                                className={`w-14 h-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 p-0 border border-gray-900 rounded-lg object-containt ${skill.bg}`}
                                src={skill.src}
                                alt={`skill-${i}`}
                            />
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
        </section>
       
        <Suspense fallback={<Preloader />}>
            <section className="relative w-full h-120 flex bg-gray-900">
            <div className="container mx-auto px-4 md:flex md:justify-start items-center h-full">
                <p className="font-ubuntu text-to-title text-white flex items-center justify-center text-center lg:items-start flex-col w-82 ">Проекты фриланса и для компаний, в которых я работал: </p> 
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {projects.map((proj) => (
                            <li className="text-white flex flex-col items-center justify-between list-none  font-ubuntu text-ideal-phone sm:text-sm md:text-size-small-medium" key={proj.id}>
                                <p className="border rounded-xl p-5 md:h-40 md:w-40 w-40 h-40 mt-5 mb-1">{proj.name}</p>
                                 <NavLink to={`work/${proj.id}`} className="text-low-size text-white">→ <span className="transform duration-100 underline hover:text-indigo-300">Перейти в раздел</span></NavLink>
                            </li>
                          
                        ))}
                    </ul>
                </div>
        </section>
        </Suspense> 
         <Slasher  /> 
    </>
    );
};

export default Main;
