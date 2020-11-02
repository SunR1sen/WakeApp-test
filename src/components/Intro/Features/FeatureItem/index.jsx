import React from 'react';
import s from './FeatureItem.module.scss';

const FeatureItem = (props) => {
    return (
        <section className={s.wrapper}>
            <img className={s.icon} src={props.icon}/>
            <div className={s.description}>
                {props.amount
                    ? <p className={s.title}>&#8364; {props.amount}</p>
                    : <p className={s.title}>{props.number}</p>}
                <p className={s.subtitle}>{props.subtitle}</p>
            </div>
        </section>
    )
}

export default FeatureItem;