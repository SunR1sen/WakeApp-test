import React from 'react';
import s from './Search.module.scss';

const Search = () => {
    return (
        <input className={s.search} placeholder='Find the game' />
    )
}

export default Search;