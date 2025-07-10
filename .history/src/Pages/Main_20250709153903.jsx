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
import SteckTechology from "./Components/Main/SteckTechology";


const MainVideo = lazy(() => import  ("./Components/MainVideoSection"));
const ProjectSection = lazy(() => import  ("./Components/Main/ProjectSection"));
const VantaBackground= lazy(() => import  ("../Components/Animation/VantaBackground"));






const Main = () => {

useLayoutEffect(() => {
    document.title = 'bandikost devolper | Главная';
}, []);



    return (
       <>
      
    <Suspense fallback={<Preloader />}>          
         <VantaBackground className="!h-[700px] sm:!h-[550px]">
            <section className={`${s.parallax}`}>
                <div className={`flex flex-col items-center md:flex-row sm:mt-[0px] md:mt-[10px] ${s.welcomeSection}`}>                 
                    <div className={`font-normal ml-5 w-[300px] sm:w-[400px] ${s.title}`} >
                        <h1 className="font-ubuntu text-size-small-medium"><span className="font-semibold">Добро пожаловать</span> ко мне в гости!</h1>
                        <p className="font-ubuntu text-size-small-medium"> Здесь вы сможете узнать информацию обо мне как о человеке, специалисте и, <span style={{textDecoration: "underline"}}>возможно</span>, вашем будущем коллеге.</p>
                        <p className="font-ubuntu text-size-small-medium"> А также во всех деталях увидеть мои коммерческие проекты и те, которые я создавал для улучшения своих навыков.</p>
                        <p className="font-ubuntu text-low-size"><sup>* </sup>Не удивляйтесь многим разделам, которые здесь могут присутствовать.</p>
                    </div>
                    <img className="w-56 h-56 mt-12 sm:mt-10 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-72 lg:h-72" src={SoloRiver} loading="lazy" alt="My archive" />
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
                
        <Suspense fallback={<Preloader />}>
            <ProjectSection />
        </Suspense> 


       <Suspense fallback={<Preloader />}>
            <SteckTechology />
        </Suspense> 

       
     
         <Slasher  /> 
    </>
    );
};

export default Main;
