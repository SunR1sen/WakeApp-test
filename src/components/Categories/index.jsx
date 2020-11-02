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
    if(window.innerWidth > 800) {
        return (
            <div className={s.wrapper}>
                <Link className={s.link} to='/allgames'>
                    <CategoriesItem icon={allGamesIcon} title='All games'/>
                </Link>
                <Link className={s.link} to='/topgames'>
                    <CategoriesItem icon={topGamesIcon} title='Top games'/>
                </Link>
                <Link className={s.link} to='/livecasino'>
                    <CategoriesItem icon={liveCasinoIcon} title='Live casino'/>
                </Link>
                <Link className={s.link} to='/slots'>
                    <CategoriesItem icon={slotsGamesIcon} title='Slots games'/>
                </Link>
                <Link className={s.link} to='/roulette'>
                    <CategoriesItem icon={rouletteIcon} title='Roulette'/>
                </Link>
                <Link className={s.link} to='/tablegames'>
                    <CategoriesItem icon={tableGamesIcon} title='Table games'/>
                </Link>
                <Link className={s.link} to='/cardgames'>
                    <CategoriesItem icon={cardGamesIcon} title='Card games'/>
                </Link>
            </div>
        )
    } else {
        return null
    }

}

export default Categories;