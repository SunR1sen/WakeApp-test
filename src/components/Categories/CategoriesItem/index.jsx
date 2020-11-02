import React from 'react';
import s from './CategoriesItem.module.scss';
import cl from 'classnames';

const CategoriesItem = (props) => {
    return (
        <button className={cl(s.category, s.active)}>
            <img src={props.icon} className={s.icon}/>
            <p className={s.title}>{props.title}</p>
        </button>
    )
}

export default CategoriesItem