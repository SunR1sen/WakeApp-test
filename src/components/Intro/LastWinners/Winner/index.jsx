import React from 'react';
import s from './Winner.module.scss';

const Winner = (props) => {
    return (
        <section className={s.wrapper}>
            <div className={s["image-wrapper"]}>
                <img className={s.cover} src={props.imageSrc} alt='game name'/>
                <span className={s.money}>&#8364; {props.amount}</span>
            </div>
            <p className={s.nickname}>
                {`${props.nickname || 'User'} just won`}
            </p>
        </section>
    )
}

export default Winner;