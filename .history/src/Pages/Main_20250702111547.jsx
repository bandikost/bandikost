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

const MainVideo = lazy(() => import  ("./Components/MainVideoSection"));
const VantaBackground= lazy(() => import  ("../Components/Animation/VantaBackground"));

const skills = [
    { src: js, bg: "bg-yellow-500" },
    { src: rt, bg: "bg-blue-400" },
    { src: ui, bg: "bg-teal-400" },
    { src: axios, bg: "bg-green-100" },
    { src: jest, bg: "bg-pink-800" },
    { src: tailwind, bg: "bg-cyan-500" },
];

const Main = () => {

useLayoutEffect(() => {
    document.title = 'bandikost devolper';
}, []);



    return (
       <>
      
    <Suspense fallback={<Preloader />}>          
        <VantaBackground>
            <section className={s.parallax}>
                <div className={s.welcomeSection}>                 
                    <div className={s.title} >
                        <h1 className="font-ubuntu text-size">Добро пожаловать ко мне в гости!</h1>
                        <p className="font-ubuntu text-size"> Здесь вы сможете узнать информацию обо мне как о человеке, специалисте и, <span style={{textDecoration: "underline"}}>возможно</span>, вашем будущем коллеге.</p>
                        <p className="font-ubuntu text-size"> А также во всех деталях увидеть мои коммерческие проекты и те, которые я создавал для улучшения своих навыков.</p>
                        <p className="font-ubuntu text-size"><sup>* </sup>Не удивляйтесь многим разделам, которые здесь могут присутствовать.</p>
                    </div>
                    <img src={SoloRiver} loading="lazy" alt="My archive" />
                </div>                
            </section>
        </VantaBackground>  
    </Suspense>  
                <Suspense fallback={<Preloader />}>
                    <MainVideo />
                </Suspense>
          <section className="relative w-full h-100 flex justify-end bg-gray-900">

                <div className="ml-10"><p className="text-size text-white text-left pb-5 ml-2">Используемые технологии:</p> 
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {skills.map((skill, i) => (
                            <li key={i}>
                            <img
                                className={`w-24 h-24 p-0 border border-gray-900 rounded-lg object-contain ${skill.bg}`}
                                src={skill.src}
                                alt={`skill-${i}`}
                            />
                            </li>
                        ))}
                    </ul>
                </div>
        </section>
    </>
    );
};

export default Main;
