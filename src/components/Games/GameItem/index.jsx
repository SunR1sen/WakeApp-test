import React, {useState} from 'react';
import s from './GameItem.module.scss';

const GameItem = (props) => {
    const [data, setData] = useState('')

    if (props.data != undefined && data == '') {
        setData(props.data)
    }

    return (
        <>
            {data && <img className={s.image}
                          src={`https://aws-origin.image-tech-storage.com/gameRes/sq/250/${data.item_title}.jpg`}/>
            }
        </>
    )
}

export default GameItem;