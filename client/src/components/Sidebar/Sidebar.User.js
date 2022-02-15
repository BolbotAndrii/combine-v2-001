import React, {useContext} from 'react'
import s from './Sidebar.module.css'
import { AuthContext } from "../../context/Auth.Context"

export const SidebarUser = () => {
	const auth = useContext(AuthContext)

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
	}

	return (
		<div className={s.userInfo}>
			<div className={s.user}>
				<img
					className={s.logo}
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
					alt=""
				/>
				<p>{auth?.name}</p>
			</div>
			<button onClick={ logoutHandler } className={s.btnLogout}>Log out</button>
		</div>
	)
}