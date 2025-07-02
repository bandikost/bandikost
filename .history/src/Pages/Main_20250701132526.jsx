import React, { useEffect } from "react";
import s from './modules/Main.module.css'; 

import { NavLink } from "react-router-dom";
import renanao from "./images/renanao/cover.JPG";
import SoloRiver from "../Images/Main/SoloRiver.jpg"

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
                <section className={s.secondSection}>
                    <div className={s.sectorSecond}>
                        <p>Здесь расположены мои проекты.
                        Некоторые уже готовы, другие в разработке.</p>
                    </div> 
                    <main className={s.containerWorks}>
                        <ul className={s.NumberOfWork}>
                            {projects.map((project) => (
                                <li key={project.id}>
                                    <NavLink to={`/work/${project.id}`}>
                                        <article className={s.card}>
                                            <div className={s.cardInner}>
                                                <div className={s.cardFront}>
                                                    <img src={project.img} loading="lazy" alt={`Проект ${project.id}`} />
                                                </div>
                                                <div className={s.cardBack}>
                                                    {project.text}
                                                </div>
                                            </div>
                                        </article>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </main>
                </section>
                <section className={s.parallax}>
                    <p>Some content here...</p>
                    <p>Scroll down to see the effect!</p>
                </section>     
        </>
    );
};

export default Main;
