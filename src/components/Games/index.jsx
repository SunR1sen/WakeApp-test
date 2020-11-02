import React from 'react';
import s from './Games.module.scss';
import AllGames from "./AllGames";
import {Switch, Route} from "react-router-dom";
import TopGames from "./TopGames";
import LiveCasinoGames from "./LiveCasinoGames";
import SlotsGames from "./SlotsGames";
import RouletteGames from "./RouletteGames";
import TableGames from "./TableGames";
import CardGames from "./CardGames";

const Games = ({searchValue}) => {



    return (
        <section className={s.wrapper}>
            <Switch>
                <Route exact path="/">
                    <AllGames searchValue={searchValue}/>
                </Route>
                <Route path='/allgames'>
                    <AllGames searchValue={searchValue}/>
                </Route>
                <Route path='/topgames'>
                    <TopGames searchValue={searchValue}/>
                </Route>
                <Route path='/livecasino'>
                    <LiveCasinoGames searchValue={searchValue}/>
                </Route>
                <Route path='/slots'>
                    <SlotsGames searchValue={searchValue}/>
                </Route>
                <Route path='/roulette'>
                    <RouletteGames searchValue={searchValue}/>
                </Route>
                <Route path='/tablegames'>
                    <TableGames searchValue={searchValue}/>
                </Route>
                <Route path='/cardgames'>
                    <CardGames searchValue={searchValue}/>
                </Route>
            </Switch>
        </section>
    )
}

export default Games