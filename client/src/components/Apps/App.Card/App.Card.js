import React, {useEffect, useState} from 'react'

import s from './App.Card.module.css'
import { getApps } from "../../../utils/api";

export const AppCard = () => {
	const [apps, setApps] = useState(null)

	useEffect(() => {
		getApps().then(data => setApps(data.data))
	},[])

	const isAdmin = true

	return (
		<>
			{ apps && apps.map(item => (
				<div className={ `card ${ s.cardCont } ` } key={item._id}>
					<div className={ `card-image ${ s.cardImgCont } ` }>
						<div className={s.cardImgLayout}></div>
						<img src={item.appImg} alt='' loading="lazy"/>
						<span className={`card-title ${s.cardHeader}` }>{item.appName}</span>
					</div>
					<div className={`card-content ${s.cardContent}`}>
						<p>{item.description}</p>
					</div>

					<div className={ `card-action ${ s.cardBtns } ` }>
						<a href={`/apps/${item._id}`}>Detail</a>
						{ isAdmin && <a href={`/apps/${item._id}`}>Remove</a> }

					</div>
				</div>)

			) }

		</>
	)
}

