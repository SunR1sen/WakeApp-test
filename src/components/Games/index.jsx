import React, {useEffect, useState} from 'react';
import s from './Games.module.scss';
import AllGames from "./AllGames";
import {Switch, Route} from "react-router-dom";
import TopGames from "./TopGames";
import LiveCasinoGames from "./LiveCasinoGames";
import SlotsGames from "./SlotsGames";
import RouletteGames from "./RouletteGames";
import TableGames from "./TableGames";
import CardGames from "./CardGames";
import * as axios from "axios";

const Games = ({searchValue}) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25')
            .then(response => {
                setGames(response.data);
            })
    }, [])


    return (
        <section className={s.wrapper}>
            <Switch>
                <Route exact path="/">
                    <AllGames games={games} searchValue={searchValue}/>
                </Route>
                <Route path='/allgames'>
                    <AllGames games={games} searchValue={searchValue}/>
                </Route>
                <Route path='/topgames'>
                    <TopGames games={games} searchValue={searchValue}/>
                </Route>
                {/*<Route path='/livecasino'>*/}
                {/*    <LiveCasinoGames searchValue={searchValue}/>*/}
                {/*</Route>*/}
                {/*<Route path='/slots'>*/}
                {/*    <SlotsGames searchValue={searchValue}/>*/}
                {/*</Route>*/}
                {/*<Route path='/roulette'>*/}
                {/*    <RouletteGames searchValue={searchValue}/>*/}
                {/*</Route>*/}
                {/*<Route path='/tablegames'>*/}
                {/*    <TableGames searchValue={searchValue}/>*/}
                {/*</Route>*/}
                {/*<Route path='/cardgames'>*/}
                {/*    <CardGames searchValue={searchValue}/>*/}
                {/*</Route>*/}
            </Switch>
        </section>
    )
}

export default Games