import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import GameItem from "../GameItem";

const TopGames = ({searchValue, games}) => {

    if (games.length === 0) {
        return null;
    } else {
        return (
            <>
                {games.filter(item => item.is_most_popular).filter(item => item.application_name.toLowerCase().includes(searchValue)).map((item) =>
                    <GameItem key={item.application_name} data={item}/>)}
            </>
        )
    }


}

export default TopGames;