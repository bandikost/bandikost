import React from 'react';
import s from "./modules/Header.module.css";

const NavBar = () => {
  return (
    <ul className={s.NavBar}>
      <li>Главная</li>
      <li>Страница</li>
    </ul>
  );
};

export default NavBar;