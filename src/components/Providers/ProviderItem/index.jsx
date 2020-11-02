import React from 'react';
import s from './ProviderItem.module.scss';

const ProviderItem = (props) => {
    return(
        <button className={s.wrapper}>
            { props.icon ? <img className={s.icon} src={props.icon} /> : null}
            <p className={s.title}>{props.title}</p>
        </button>
    )
}

export default ProviderItem;