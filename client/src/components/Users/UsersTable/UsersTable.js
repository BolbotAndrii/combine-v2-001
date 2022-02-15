import React, { useEffect , useState } from 'react'
import {deleteUser, getUsers} from '../../../utils/api'
import { Table } from './Table/Table'
import { Pagination } from '../../Pagination/Pagination'
import * as modalActions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import  { isUpdateUserDataOpen } from '../../../redux/Modals/Modal.selectors'

export const UsersTable = () =>  {
	const [users, setUsers] = useState(0)
	const [remove, setRemove] = useState(false)

	const dispatch = useDispatch()
	const modSel = useSelector( isUpdateUserDataOpen )

	useEffect(() => {
		getUsers()
			.then((r) => {
				setUsers( r.data )
			} )
	}, [remove, modSel])

	const deleteElem = ( id ) => {
		deleteUser(id).then((data) => {
			setRemove((prev) => !prev )
		})
	}

	const closeModal = () => {
		dispatch(modalActions.modalEditUserAction(false))
	}

	return (
		<>
			{
				users && users.length > 0
					? <Table
						users = { users }
						deleteElem={ deleteElem }
						closeModal={ closeModal }
					/>
					: <h2>Users table is empty</h2>
			}

			{
				users.length > 10 && <Pagination />
			}
		</>
	)
}