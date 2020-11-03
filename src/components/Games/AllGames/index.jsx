import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import GameItem from "../GameItem";

const AllGames = ({searchValue, games}) => {

    return (
        <>
            {games.filter(item => item.application_name.toLowerCase().includes(searchValue)).map((item) =>
                <GameItem key={item.application_name} data={item}/>)}
        </>
    )
}

export default AllGames;