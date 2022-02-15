import React from 'react';
import { SidebarHeader } from './Sidebar.Header'
import { SidebarMenu } from './Sidebar.Menu'
import { SidebarUser } from './Sidebar.User'
import s from './Sidebar.module.css'

export const Sidebar = () => {
	return (
		<div className={s.sidebar} >
			<SidebarHeader />
			<SidebarMenu />
			<SidebarUser />
		</div>
	)
}

