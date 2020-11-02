import React from 'react';
import s from './NavMenu.module.scss';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
            <nav className={s.navMenu}>
                <Link to='lobby' className={s.link}>Lobby</Link>
                <Link to='categories' className={s.link}>Categories</Link>
                <Link to='promotions' className={s.link}>Promotions</Link>
                <Link to='tournaments' className={s.link}>Tournaments</Link>
            </nav>
    )
}

export default NavMenu;