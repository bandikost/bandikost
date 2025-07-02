import { useEffect } from "react";
import s from './modules/Main.module.css'; 
import SoloRiver from "../Images/Main/SoloRiver.jpg"
import VantaBackground from "../Components/Animation/VantaBackground";


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
        <section className="bg-gray-900">
                    <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/Video/code.mp4" // см. комментарии ниже
    autoPlay
    loop
    muted
    playsInline
  />
                </section>

    </>
    );
};

export default Main;
