import React from 'react';
import logo from '../../../assets/images/logo.png';
import s from './Logo.module.scss';

const Logo = () => {
    return (
        <img src={logo} className={s.logo} alt='logo' />
    )
}

export default Logo;