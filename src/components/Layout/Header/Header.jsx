import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <div className='container'>
                <div className='header__nav'>
                    <h1 className='header__logo'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/NC_logo.png" alt="smth" />
                    </h1>
                    <ul className={'header__menu'}>
                        <li className={'header__menu-item'}>
                            <NavLink to={"/about"}>
                            О нас
                            </NavLink>
                            </li>
                        <li className={'header__menu-item'}>
                            <NavLink to={"/"}>
                            Направление
                            </NavLink>
                            </li>
                        <li className={'header__menu-item'}>
                            <NavLink to={"/"}>
                            Цена
                            </NavLink>
                            </li>
                        <li className={'header__menu-item'}>
                            <NavLink to={"/students"}>
                            Список студентов
                            </NavLink>
                            </li>
                        <li className={'header__menu-item'}>
                            <NavLink to={"/contact"}>
                            Контакты
                            </NavLink>
                            </li>
                        <li className={'header__menu-item'}>
                            <FaInstagram size={22}/>
                            </li>
                        <li className={'header__menu-item'}>
                            <FaWhatsapp size={22}/>
                            </li>
                        <li className={'header__menu-item'}>
                            <FaTelegram size={22}/>
                            </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header