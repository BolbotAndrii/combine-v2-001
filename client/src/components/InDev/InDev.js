import React from 'react'
import s from './InDev.module.css'

export const InDev = () => {
    return (
        <>
            <div className={s.inDevContainer}>
                <h1  className={s.glitchContainer}>
                    <p>
                        <span aria-hidden={true}  className={s.spanOne}>Coming soon</span>
                        Coming soon
                        <span aria-hidden={true}   className={s.spanTwo}>Coming soon</span>
                    </p>
                </h1>
            </div>
        </>
    )
}

