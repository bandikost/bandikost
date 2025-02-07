import React, { useEffect } from "react";
import s from './modules/Main.module.css'; 
import Header from "../Components/Header";
import { NavLink } from "react-router-dom";
import renanao from "./images/renanao/cover.JPG";

const projects = [
    { id: 1, img: renanao, text: "Проект 1: Renanao" },
    { id: 2, img: renanao, text: "Проект 2: Разработка" },
    { id: 3, img: renanao, text: "Проект 3: Геймдев" },
    { id: 4, img: renanao, text: "Проект 4: VR" },
    { id: 5, img: renanao, text: "Проект 5: AI" },
    { id: 6, img: renanao, text: "Проект 6: Web 3.0" },
];

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
            <Header />
            <div>
                <header className={s.parallax}>
                    <h1>Добро пожаловать на мой личный сайт!</h1>
                </header>
                <section className={s.Second_section}>
                    <div className={s.Sector_second}>
                        <p>Здесь расположены мои проекты.</p>
                        <p>Некоторые уже готовы, другие в разработке.</p>
                    </div> 
                    <div className={s.container_Works}>
                        <ul className={s.NumberOfWork}>
                            {projects.map((project) => (
                                <li key={project.id}>
                                    <NavLink to={`/work/${project.id}`}>
                                        <div className={s.card}>
                                            <div className={s.cardInner}>
                                                <div className={s.cardFront}>
                                                    <img src={project.img} alt={`Проект ${project.id}`} />
                                                </div>
                                                <div className={s.cardBack}>
                                                    {project.text}
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className={s.parallax}>
                    <p>Some content here...</p>
                    <p>Scroll down to see the effect!</p>
                </section>
            </div>
        </>
    );
};

export default Main;
