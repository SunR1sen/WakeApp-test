import React from 'react';
import s from './Search.module.scss';

const Search = ({value, setValue}) => {



    return (
        <input value={value} onChange={(e) => setValue(e.target.value)} className={s.search} placeholder='Find the game' />
    )
}

export default Search;