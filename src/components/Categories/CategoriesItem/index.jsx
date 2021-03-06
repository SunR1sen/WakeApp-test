import React from 'react';
import s from './CategoriesItem.module.scss';
import cl from 'classnames';
import {withRouter} from 'react-router-dom';

const CategoriesItem = (props) => {
    return (
        <button className={cl(s.category, props.location.pathname === props.activePath && s.active)}>
            <img src={props.icon} className={s.icon}/>
            <p className={s.title}>{props.title}</p>
        </button>
    )
}

export default withRouter(CategoriesItem);