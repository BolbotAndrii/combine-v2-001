import React, {useContext} from 'react'
import { NavLink, useHistory }  from 'react-router-dom'
import { Context } from '../../context/Custom.Context'
import s from './Heder.module.css'
import {AuthContext} from "../../context/Auth.Context";


export const HeaderMenu = (  ) => {

	const { menu } = useContext( Context )
	const topMenu = useHistory().location.pathname.split('/')[1];
	const { userRole } = useContext( AuthContext )

	return (
		<div className={ s.headerMenu }>
			{ topMenu && menu[topMenu] !== 'login' ? menu[topMenu].filter( item => item.perm.includes(userRole)).map( elem => (
				<NavLink to={ elem.path } key={ elem.id } activeClassName={ s.active } exact>
					<div>
						{ elem.nameEn }
					</div>
				</NavLink>
			)) : '' }
		</div>
	)
}