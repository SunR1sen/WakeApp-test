import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import GameItem from "../GameItem";

const TopGames = ({searchValue}) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25')
            .then(response => {
                setGames(response.data.map(item => {
                    if (item.is_most_popular) {
                        return item;
                    }
                }));
            })
    }, [])

    return (
        <>
            {games.filter(item => item.application_name.toLowerCase().includes(searchValue)).map((item, index) =>
                <GameItem key={index} data={item}/>)}
        </>
    )
}

export default TopGames;