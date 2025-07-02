import { useEffect } from "react";
import s from './modules/Main.module.css'; 
import SoloRiver from "../Images/Main/SoloRiver.jpg"
import VantaBackground from "../Components/Animation/VantaBackground";
import code from "../Video/code.mp4"
import js from "../Images/settings/js.svg"
import ui from "../Images/settings/chakra.svg"
import axios from "../Images/settings/axios.png"
import jest from "../Images/settings/jest.webp"
import rt from "../Images/settings/react.png"

const codeForSPA = [
    {id: 1, name: "React Router — клиентская маршрутизация"},
    {id: 2, name: "Radix UI — доступные и анимированные компоненты"},
    {id: 3, name: "Jotai — современное и лёгкое управление состоянием"},
    {id: 4, name: "Tailwind CSS — быстрая стилизация через utility-классы"},
    {id: 5, name: "Jest/Suspense/Optimization Hooks — тестирование и оптимизация"},
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
       <p className="text-size"> Страница пока что скрыта и находится в разработке </p>
      
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
       <section className="relative w-full h-100 flex items-start bg-gray-900">
            <div className="flex">
                
                <div className="border border-gray-400 rounded-xl">
                    <video className="w-96 h-56 object-cover rounded-xl" src={code} autoPlay loop muted playsInline/>
                </div>
                <div className="ml-5">
                    <ul className="font-ubuntu text-size text-white flex items-start flex-col">Сайт полностью на React (CRA)
                        {codeForSPA.map((c) => (
                            <li key={c.id} className="ml-10 text-left p-1 m-0 text-size-small-medium w-full list-decimal ">{c.name}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>

          <section className="relative w-full h-100 flex justify-end bg-gray-900">
            <div className="flex">
                  <div className="ml-5">
                    <ul className="font-ubuntu text-size text-white flex justify-end flex-col">Сайт полностью на React (CRA)
                        {codeForSPA.slice(5, 10).map((c) => (
                            <li key={c.id} className="text-right p-1 m-0 text-size-small-medium w-full list-decimal ">{c.name}</li>
                        ))}
                    </ul>

                </div>
                <div className="border border-gray-400 rounded-xl">
                   <ul className="font-ubuntu text-size text-white flex justify-end flex-col">Сайт полностью на React (CRA)
                       
                    </ul>
                    <ul className="flex">
                         <li><img className=" w-24 h-24" src={js} alt="" /></li>
                        <li><img src={rt} alt="" /></li>
                        <li><img src={ui} alt="" /></li>
                        <li><img src={axios} alt="" /></li>
                        <li><img src={jest} alt="" /></li>
                    </ul>
                </div>
              
            </div>
        </section>
    </>
    );
};

export default Main;
