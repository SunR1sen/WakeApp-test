import React from 'react';
import s from './Games.module.scss';
import AllGames from "./AllGames";
import {Switch, Route, Redirect} from "react-router-dom";
import TopGames from "./TopGames";
import LiveCasinoGames from "./LiveCasinoGames";
import SlotsGames from "./SlotsGames";
import RouletteGames from "./RouletteGames";

const Games = () => {
    return (
        <section className={s.wrapper}>
            <Switch>
                <Route exact path="/">
                    <AllGames/>
                </Route>
                <Route path='/allgames'>
                    <AllGames/>
                </Route>
                <Route path='/topgames'>
                    <TopGames/>
                </Route>
                <Route path='/livecasino'>
                    <LiveCasinoGames/>
                </Route>
                <Route path='/slots'>
                    <SlotsGames/>
                </Route>
                <Route path='/roulette'>
                    <RouletteGames/>
                </Route>
                <Route path='/tablegames'>
                    <RouletteGames/>
                </Route>
                <Route path='/cardgames'>
                    <RouletteGames/>
                </Route>
            </Switch>
        </section>
    )
}

export default Games