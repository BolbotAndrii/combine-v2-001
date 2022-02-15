import React from 'react'
import s from './Registrator.Element.module.css'
import regru from '../../../images/regru.svg'

export const RegistratorElement = () => {
    return (
        <div className={s.regContainer}>
            <a href="!#" className="card small black">
                <img src={ regru } alt="" />
                <div className="card-action">
                    <a href="!#">Select</a>
                </div>
            </a>
            <a href="!#" className="card small black">
                <img src={ regru } alt="" />
                <div className="card-action">
                    <a href="!#">Select</a>
                </div>
            </a>
        </div>
    )
}
