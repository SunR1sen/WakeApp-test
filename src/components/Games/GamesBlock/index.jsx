import React from 'react';
import GameItem from "../GameItem";

const GamesBlock = ({games, searchFilter, category = '', condition}) => {

    return (
        <>
            {searchFilter(games).filter(item => {
                if(condition) {
                    return item[condition] === category;
                } else {
                    return item;
                }
            }).map((item) =>
                <GameItem key={item.application_name} data={item}/>)}
        </>
    )
}

export default GamesBlock;