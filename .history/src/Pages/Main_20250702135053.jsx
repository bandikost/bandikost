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
    document.title = 'bandikost devolper';
}, []);



    return (
       <>
      
    <Suspense fallback={<Preloader />}>          
       {/*  <VantaBackground>
            <section className={`h-12 ${s.parallax}`}>
                <div className={s.welcomeSection}>                 
                    <div className={s.title} >
                        <h1 className="font-ubuntu text-size">Добро пожаловать ко мне в гости!</h1>
                        <p className="font-ubuntu text-size"> Здесь вы сможете узнать информацию обо мне как о человеке, специалисте и, <span style={{textDecoration: "underline"}}>возможно</span>, вашем будущем коллеге.</p>
                        <p className="font-ubuntu text-size"> А также во всех деталях увидеть мои коммерческие проекты и те, которые я создавал для улучшения своих навыков.</p>
                        <p className="font-ubuntu text-size"><sup>* </sup>Не удивляйтесь многим разделам, которые здесь могут присутствовать.</p>
                    </div>
                    <img className="w-72 h-48 sm:w-96 sm:h-56 md:w-96 md:h-56 lg:w-96 lg:h-56" src={SoloRiver} loading="lazy" alt="My archive" />
                </div>                
            </section>
        </VantaBackground>*/}
        <Slasher />  
    </Suspense>  
                <Suspense fallback={<Preloader />}>
                    <MainVideo />
                </Suspense>
          <section className="relative w-full h-[600px] sm:h-[400px] center-flex bg-gray-900 md:flex md:justify-end">

                <div className="ml-10 flex flex-col items-center"><p className="text-lg sm:text-size text-white text-center sm:text-right pb-5 w-96">Используемые технологии: </p> 
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 h-[500px] flex items-center justify-center ">
                        {skills.map((skill, i) => (
                            <li key={i}>
                            <img
                                className={`w-16 h-16 sm:w-24 md:h-24 p-0 border border-gray-900 rounded-lg object-contain ${skill.bg}`}
                                src={skill.src}
                                alt={`skill-${i}`}
                            />
                            </li>
                        ))}
                    </ul>
                </div>
        </section>

            <section className="relative w-full h-120 center-flex  bg-gray-900">

                <div className="ml-10"><p className="text-size text-white text-left pb-5">Проекты фриланса и для компаний, в которых я работал: </p> 
                    <div className="grid grid-cols-3"></div>
                </div>
        </section>
    </>
    );
};

export default Main;
