import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./modules/Header.module.css";


const NavBar = () => {
  return (
    <ul className={s.NavBar}>
      <li>Главная</li>
      <li><NavLink to="/about">Обо мне</NavLink></li>
      <li>Страница</li>
    </ul>
  );
};

export default NavBar;