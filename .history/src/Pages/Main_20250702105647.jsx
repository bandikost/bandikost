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
    {id: 1, name: "JavaScript"},
    {id: 2, name: "React (CRA)"},
    {id: 3, name: "Radix-ui"},
    {id: 4, name: "Jest"},
    {id: 5, name: "Axios"},
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
                    <MainVideo />
                </Suspense>
          <section className="relative w-full h-100 flex justify-end bg-gray-900">
                      

                <div className="ml-10">
                    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
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
