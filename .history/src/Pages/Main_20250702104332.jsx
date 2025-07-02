import { Suspense, useEffect, lazy } from "react";
import s from './modules/Main.module.css'; 
import SoloRiver from "../Images/Main/SoloRiver.jpg"
import js from "../Images/settings/js.svg"
import ui from "../Images/settings/chakra.svg"
import axios from "../Images/settings/axios.png"
import jest from "../Images/settings/jest.webp"
import rt from "../Images/settings/react.png"
import Preloader from "../Components/Animation/Preloader";

const MainVideo = lazy(() => import  ("./Components/MainVideoSection"));
const VantaBackground= lazy(() => import  ("../Components/Animation/VantaBackground"));


const codeForSPA = [
    {id: 1, name: "React Router — клиентская маршрутизация"},
    {id: 2, name: "Radix UI — доступные и анимированные компоненты"},
    {id: 3, name: "Jotai — современное и лёгкое управление состоянием"},
    {id: 4, name: "Tailwind CSS — быстрая стилизация через utility-классы"},
    {id: 5, name: "Jest/Suspense/Optimization Hooks — тестирование и оптимизация"},
    {id: 6, name: "JavaScript"},
    {id: 7, name: "React (CRA)"},
    {id: 8, name: "Radix-ui"},
    {id: 9, name: "Jest"},
    {id: 10, name: "Axios"},
    
]

const Main = () => {
    useEffect(() => {
        const handleScroll = () => {
          const parallax = document.querySelector(".parallax");
      
          if (parallax) {
            const offset = window.scrollY;
            parallax.style.backgroundPositionY = `${offset * 0.5}px`;
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

 

useEffect(() => {
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
                   <section className="relative w-full h-100 flex items-start bg-gray-900">
                                       <div className="flex">
                                             
                                           <div className="border border-gray-400 rounded-xl">
                                             <MainVideo />
                                           </div>
                                           <div className="ml-5">
                                               <ul className="font-ubuntu text-size text-white flex items-start flex-col">Сайт полностью на React (CRA)
                                                   {codeForSPA.slice(0, 5).map((c) => (
                                                       <li key={c.id} className="ml-10 text-left p-1 m-0 text-size-small-medium w-full list-decimal ">{c.name}</li>
                                                   ))}
                                               </ul>
                           
                                           </div>
                                       </div>
                                   </section>
                </Suspense>
          <section className="relative w-full h-100 flex justify-end bg-gray-900">
                      
                        <div className="flex">
                            <div className="ml-5">
                                <ul className="font-ubuntu text-size text-white flex justify-end flex-col">Используемые технологии: 
                                    {codeForSPA.slice(5, 10).map((c) => (
                                        <li key={c.id} className="text-right p-1 m-0 text-size-small-medium w-full list-decimal ">{c.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                <div className="ml-10">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
                        <li><img className="w-24 h-24 p-3" src={js} alt="" /></li>
                        <li><img className="w-24 h-24 p-3" src={rt} alt="" /></li>
                        <li><img className="w-24 h-24 p-3" src={ui} alt="" /></li>
                        <li><img className="w-24 h-24 p-3" src={axios} alt="" /></li>
                        <li><img className="w-24 h-24 p-3" src={jest} alt="" /></li>
                    </ul>
                </div>
              
           
        </section>
    </>
    );
};

export default Main;
