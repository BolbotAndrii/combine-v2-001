import React from 'react'
import s from  '../../Users.module.css'
import { useDispatch } from 'react-redux'
import * as Actions from '../../../../redux/Modals/Modals.action'


export const Table = ( { users, deleteElem } ) => {
	const dispatch = useDispatch()

	const openHandler = ( id ) => {
		dispatch(Actions.modalEditUserAction( { isOpen: true, id } ) )
	}

	return (
		<table className={ s.userTable }>
			<thead>
				<tr>
					<th>User</th>
					<th>Mark</th>
					<th>Coins</th>
					<th>Email</th>
					<th>Group</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>

			<tbody>
				{ users.map( ( { _id: id, userName, userMark, userEmail, userGroup, userCoins } ) => (
					<tr key={ id }>
						<td className={ s.nameBlock }>
							<div>
								<img className={ `circle ${ s.tableAva }` } src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
							</div>
							<div>
								<div>{ userName }</div>
								<div className={ s.miniText }>{ id }</div>
							</div>
						</td>
						<td>{ userMark }</td>
						<td className='amber-text'>{ userCoins }</td>
						<td>{ userEmail }</td>
						<td>{ userGroup }</td>
						<td>
							<button className={ `blue-text ${ s.tableBtn }` } onClick={() => openHandler(id)}>
								Edit
							</button>
						</td>
						<td>
							<button onClick={ () => deleteElem( id )  } className={ `red-text ${ s.tableBtn }`}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>

	)
}

