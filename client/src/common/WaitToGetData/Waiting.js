import React from 'react';
import s from './Waiting.module.css'

export const Waiting = ( { text } ) => {
    return (
        <div className={s.container}>
                <i className="material-icons large light-blue-text">not_interested</i>
                <span className='white-text'>{text}</span>
        </div>
    )
}