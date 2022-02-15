import React from 'react';
import s from "./EmptyData.module.css";

export const EmptyData = ( {name, text } ) => {
    return (
        <div className={s.container}>
            <i className="material-icons large light-blue-text">not_interested</i>
            <span className='white-text'>{name + text}</span>
        </div>
    )
}

