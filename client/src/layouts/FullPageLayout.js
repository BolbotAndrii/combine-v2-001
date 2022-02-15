import React from 'react';
import s from './FullPageLayout.module.css'

export const FullPageLayout = ( { children } ) => {
    return (
        <div className={s.container}>
            { children }
        </div>
    )
}
