import { useEffect } from "react";
import s from './modules/Main.module.css'; 
import SoloRiver from "../Images/Main/SoloRiver.jpg"


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
                <section className={s.parallax}>
                    <div className={s.welcomeSection}>                 
                        <div className={s.title}>
                            <h1>Добро пожаловать ко мне в гости!</h1>
                            <p> Здесь вы сможете узнать информацию обо мне как о человеке, специалисте и, <span style={{textDecoration: "underline"}}>возможно</span>, вашем будущем коллеге.</p>
                            <p> А также во всех деталях увидеть мои коммерческие проекты и те, которые я создавал для улучшения своих навыков.</p>
                            <p><sup>* </sup>Не удивляйтесь многим разделам, которые здесь могут присутствовать.</p>
                        </div>
                        <img src={SoloRiver} loading="lazy" alt="My archive" />
                    </div> 
                                 
                </section>
                
                <section className={s.parallax}>
                    <p>Some content here...</p>
                    <p>Scroll down to see the effect!</p>
                </section>     
        </>
    );
};

export default Main;
