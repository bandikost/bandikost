import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./modules/Header.module.css";


const NavBar = () => {
  return (
    <ul className={s.NavBar}>
      <li>Главная</li>
      <li><NavLink to="/about">Обо мне</NavLink></li>
      <li><NavLink to="/films">Фильмы</NavLink></li>
    </ul>
  );
};

export default NavBar;