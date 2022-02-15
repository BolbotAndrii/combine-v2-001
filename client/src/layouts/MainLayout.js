import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Header } from '../components/Header/Header'
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs'
import s from './MainLayout.module.css'

export const MainLayout = ( { children } ) => {
	return (
		<div className={ s.container }>
			<Sidebar />
				<Header />
				<div className={ s.rightContainer }>
					<Breadcrumbs />
					{ children }
				</div>
		</div>
	)
}

