import React from "react";
import s from "./modules/Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
return (
    <div className={`z-20 ${s.Header}`} >
        <div className={s.Headerinner} >
            <NavBar />
        </div>
    </div>    
);};

export default Header;