import React from 'react';
import CategoriesItem from "./CategoriesItem";
import s from './Categories.module.scss';
import allGamesIcon from '../../assets/images/icons/categories/all_games.svg';
import topGamesIcon from '../../assets/images/icons/categories/top_games.svg';
import liveCasinoIcon from '../../assets/images/icons/categories/live_casino.svg';
import slotsGamesIcon from '../../assets/images/icons/categories/slots_games.svg';
import rouletteIcon from '../../assets/images/icons/categories/roulette.svg';
import tableGamesIcon from '../../assets/images/icons/categories/table_games.svg';
import cardGamesIcon from '../../assets/images/icons/categories/card_games.svg';
import {Link} from "react-router-dom";

const Categories = () => {
    // Я извиняюсь, что здесь такой костыль, к сожалению догадаться я смог только до такого решения,
    // не у кого спросить совета, буду рад, если подскажите Best Practices)

    if(window.innerWidth > 800) {
        return (
            <div className={s.wrapper}>
                <Link className={s.link} to='/allgames'>
                    <CategoriesItem activePath='/allgames' icon={allGamesIcon} title='All games'/>
                </Link>
                <Link className={s.link} to='/topgames'>
                    <CategoriesItem activePath='/topgames' icon={topGamesIcon} title='Top games'/>
                </Link>
                <Link className={s.link} to='/livecasino'>
                    <CategoriesItem activePath='/livecasino' icon={liveCasinoIcon} title='Live casino'/>
                </Link>
                <Link className={s.link} to='/slots'>
                    <CategoriesItem activePath='/slots' icon={slotsGamesIcon} title='Slots games'/>
                </Link>
                <Link className={s.link} to='/roulette'>
                    <CategoriesItem activePath='/roulette' icon={rouletteIcon} title='Roulette'/>
                </Link>
                <Link className={s.link} to='/tablegames'>
                    <CategoriesItem activePath='/tablegames' icon={tableGamesIcon} title='Table games'/>
                </Link>
                <Link className={s.link} to='/cardgames'>
                    <CategoriesItem activePath='/cardgames' icon={cardGamesIcon} title='Card games'/>
                </Link>
            </div>
        )
    } else {
        return null
    }

}

export default Categories;