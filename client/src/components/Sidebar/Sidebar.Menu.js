import React, {useContext, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
import { Context } from '../../context/Custom.Context'
import {AuthContext} from "../../context/Auth.Context"
import { getUserGroupByName} from "../../utils/api"

export const SidebarMenu = () => {
	const { sidebar } = useContext( Context )
	const { userRole } = useContext( AuthContext )
	const [groupAccess, setGroupAccess] = useState( [] )


	useEffect( () => {
		 getUserGroupByName( userRole )
			.then( ( { data } ) => setGroupAccess( data ) )
			.catch( e => { console.error( e ) } )
	}, [userRole])

	return (
			<div className={s.sidebarMenu}>
				{ sidebar && sidebar.filter( item => groupAccess.includes(item.state) ).map( elem => (
					<NavLink to={ elem.href } key={ elem.id } activeClassName={s.active} className={ s.link }>
						<i className="material-icons">{ elem.icon }</i>
						<div>{ elem.nameEn }</div>
					</NavLink>
				)) }
			</div>
		)
}