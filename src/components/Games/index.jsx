import React, {useEffect, useState} from 'react';
import s from './Games.module.scss';
import {Switch, Route} from "react-router-dom";
import * as axios from "axios";
import GamesBlock from "./GamesBlock";

const Games = ({searchValue}) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25')
            .then(response => {
                setGames(response.data);
            })
    }, [])

    const searchFilter = (games) => {
        return games.filter(item => item.application_name.toLowerCase().includes(searchValue))
    }

    if (games.length === 0) {
        return null
    } else {
        return (
            <section className={s.wrapper}>
                <Switch>
                    <Route exact path="/">
                        <GamesBlock games={games} searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/allgames'>
                        <GamesBlock games={games} searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/topgames'>
                        <GamesBlock games={games} condition='is_most_popular' category={true}
                                    searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/livecasino'>
                        <GamesBlock games={games} condition='game_family_group' category='Live Casino'
                                    searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/slots'>
                    <GamesBlock games={games} condition='game_family_group' category='Slot'
                                searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/roulette'>
                        <GamesBlock games={games} condition='game_family_group' category='Roulette'
                                    searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/tablegames'>
                        <GamesBlock games={games} condition='game_family_group' category='Slot'
                                    searchFilter={searchFilter}/>
                    </Route>
                    <Route path='/cardgames'>
                        <GamesBlock games={games} condition='game_family_group' category='Slot'
                                    searchFilter={searchFilter}/>
                    </Route>
                </Switch>
            </section>
        )
    }

}

export default Games