import React from 'react';
import s from './UserButtons.module.scss';
import {Link} from "react-router-dom";
import cl from 'classnames';

const UserButtons = () => {
    return (
        <div className={s.userButtons}>
            <Link to='login' className={s.link}>Login</Link>
            <Link to='register' className={cl(s.link, s.register)}>Register</Link>
        </div>
    )
}

export default UserButtons;