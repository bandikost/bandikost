import React from "react";
import s from "./modules/Header.module.css";
import NavBar from "./NavBar";
import Films from "../Pages/Films";

const Header = () => {
return (
    <div className={s.Header} >
      {/*  <h1 className="text-white ml-5 text-sm">bandikost</h1>*/} 
        <div className={s.Headerinner} >
            <NavBar />
            <Films text={text} />
        </div>
    </div>    
);};

export default Header;