import React from 'react';
import s from './BackgroundImage.module.scss';
import desktopBg from '../../../assets/images/bgClown-desktop.png';
import mobileBg from '../../../assets/images/bgClown-mobile.png';

const BackgroundImage = () => {
    return (
        <picture>
            <source srcSet={mobileBg} media="(max-width: 800px)" className={s.background}/>
            <img src={desktopBg} className={s.background}/>
        </picture>
    )
}

export default BackgroundImage;