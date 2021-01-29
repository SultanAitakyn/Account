import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="row">
                <div className="col-12 col-xl-1">
                    <div className="logo"></div>
                </div>
                <div className="col-12 col-xl-11 align-self-center pl-xl-5">
                    <h2 className="menu-bar__title">My Account</h2>
                    <nav>
                        <ul className="menu d-flex flex-wrap">
                            <li className="menu__item"><Link to='/main'>Главная</Link></li>
                            <li className="menu__item"><Link to="/about">О нас</Link></li>
                            <li className="menu__item"><Link to="#">Платежи</Link></li>
                            <li className="menu__item"><Link to="#">Первеоды</Link></li>
                            <li className="menu__item"><Link to="#">Купля/продажа валют</Link></li>
                            <li className="menu__item"><Link to="#">Заявки</Link></li>
                            <li className="menu__item"><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
        ;
}

    export default Header;
