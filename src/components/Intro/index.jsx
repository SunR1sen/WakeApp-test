import React from 'react';
import TitleBlock from "./TitleBlock";
import LastWinners from "./LastWinners";
import Features from "./Features";
import s from './Intro.module.scss';
import BackgroundImage from "./BackgroundImage";
import MobileMenu from "./MobileMenu";

const Intro = () => {
    return (
        <>
            <TitleBlock/>
            <div className={s["content-wrapper"]}>
                <MobileMenu />
                <LastWinners/>
                <Features/>
            </div>
                <BackgroundImage />
        </>
    )
}

export default Intro;