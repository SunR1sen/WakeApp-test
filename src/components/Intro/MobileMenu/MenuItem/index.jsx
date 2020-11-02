import React from 'react';
import s from './MenuItem.module.scss';

const MenuItem = (props) => {
    return (
        <button className={s.wrapper}>
            <img className={s.icon} src={props.icon} />
            <p className={s.title}>{props.title}</p>
        </button>
    )
}

export default MenuItem;