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
         <VantaBackground>
            <section className={`h-12 ${s.parallax}`}>
                <div className={`flex flex-col items-center md:flex-row sm:mt-[0px] md:mt-[100px] ${s.welcomeSection}`}>                 
                    <div className={`font-normal ml-10 w-[300px] sm:w-[400px] ${s.title}`} >
                        <h1 className="font-ubuntu text-size-small-medium"><span className="font-semibold">Добро пожаловать</span> ко мне в гости!</h1>
                        <p className="font-ubuntu text-size-small-medium"> Здесь вы сможете узнать информацию обо мне как о человеке, специалисте и, <span style={{textDecoration: "underline"}}>возможно</span>, вашем будущем коллеге.</p>
                        <p className="font-ubuntu text-size-small-medium"> А также во всех деталях увидеть мои коммерческие проекты и те, которые я создавал для улучшения своих навыков.</p>
                        <p className="font-ubuntu text-low-size"><sup>* </sup>Не удивляйтесь многим разделам, которые здесь могут присутствовать.</p>
                    </div>
                    <img className=" w-56 h-56 mt-12 sm:mt-10 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-96 lg:h-72" src={SoloRiver} loading="lazy" alt="My archive" />
                </div>                
            </section>
        </VantaBackground>
        <Slasher />  
    </Suspense>  
               {/*   <Suspense fallback={<Preloader />}>
                    <MainVideo />
                </Suspense>
                
        <section className="relative w-full h-[600px] sm:h-[400px] center-flex bg-gray-900 md:flex md:justify-end">

                <div className="ml-10"><p className="text-lg sm:text-size text-white text-center sm:text-right pb-5 w-full">Используемые технологии: </p> 
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 ">
                        {skills.map((skill, i) => (
                            <li key={i}>
                            <img
                                className={`w-14 h-14 md:w-24 md:h-24 p-0 border border-gray-900 rounded-lg object-contain ${skill.bg}`}
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
        </section>*/}
    </>
    );
};

export default Main;
