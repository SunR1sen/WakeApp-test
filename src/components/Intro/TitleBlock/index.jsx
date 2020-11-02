import React from 'react';
import s from './TitleBlock.module.scss';

const TitleBlock = () => {
    return (
        <div className={s["title-block"]}>
            <h1 className={s.title}>
                Sign up <span className={s.amper}>&</span> get welcome bonus
            </h1>
            <h2 className={s.subtitle}>
                &#8364; 100 <span className={s.plus}>+</span> 55 free spins
            </h2>
            <button className={s.btn}>
                Deposit now
            </button>
        </div>
    )
}

export default TitleBlock;