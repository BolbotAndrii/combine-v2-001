import React from 'react'
import s from './Apps.module.css'
import { AppCard } from './App.Card/App.Card'

export const Apps = () => {
	return (
		<div className={s.appContainer}>
			<AppCard />
		</div>
	)
}
