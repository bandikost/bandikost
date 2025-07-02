import { useEffect } from "react";
import s from './modules/Main.module.css'; 
import SoloRiver from "../Images/Main/SoloRiver.jpg"
import VantaBackground from "../Components/Animation/VantaBackground";
import code from "../Video/code.mp4"

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
       <section className="relative w-full h-screen flex items-start bg-gray-900">
            <div className="flex">
                
                <div className="border border-gray-400 rounded-xl">
                    <video className="w-96 h-56 object-cover rounded-xl" src={code} autoPlay loop muted playsInline/>
                </div>
                <div className="ml-5">
                    <ul className="font-ubuntu text-size text-white">Сайт полностью SPA
                        <li className="list-decimal p-0 m-0 text-size-small-medium w-24">Custom Hooks</li>
                    </ul>

                </div>
            </div>
        </section>


    </>
    );
};

export default Main;
