import React from 'react'
import s from './Sidebar.module.css'

export const SidebarHeader = () => {
	return (
		<div>
			<div className={s.sideHeader}>
				<a href="/">
					<img
						className={s.logo}
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt=""
					/>
				</a>
				<p >Combine V2</p>
			</div>
		</div>
	)
}