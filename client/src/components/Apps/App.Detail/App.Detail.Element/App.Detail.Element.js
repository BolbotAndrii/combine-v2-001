import React from 'react';
import s from './App.Detail.Element.module.css'

export const AppDetailElement = ({app}) => {
    return (
        <div className={s.container}>

            <div>
                <h2>{app.appName}</h2>
                <img src={app.appImg} alt=""/>
                <p>{app.description}</p>
            </div>

            <form>
                <input type="text" name="ids" id="ids" defaultValue={app.appIds}/>
            </form>

        </div>
    )
}

