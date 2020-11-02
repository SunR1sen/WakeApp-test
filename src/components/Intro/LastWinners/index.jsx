import React from 'react';
import s from './LastWinners.module.scss';
import Winner from "./Winner";

const dataFromServer = [
    {
        id: 1,
        imageSrc: 'https://aws-origin.image-tech-storage.com/gameRes/sq/150/TreasureHeroes.jpg',
        amount: '11.574.60',
        userName: 'Wild98',
    },
    {
        id: 2,
        imageSrc: 'https://aws-origin.image-tech-storage.com/gameRes/sq/150/OzwinsJackpots.jpg',
        amount: '8.200.66',
        userName: 'Luliana',
    },
    {
        id: 3,
        imageSrc: 'https://aws-origin.image-tech-storage.com/gameRes/sq/150/WildRoboFactory.jpg',
        amount: '6.483.67',
        userName: 'Farisha',
    },
]

const LastWinners = () => {
    return (
        <div className={s.lastWinners}>
            <h2 className={s.title}>
                Last winners
            </h2>
            {dataFromServer.map(item => <Winner imageSrc={item.imageSrc} nickname={item.userName} amount={item.amount}
                                                key={item.id}/>)}

        </div>
    )
}

export default LastWinners;