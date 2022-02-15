import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'
import { ModalEdit } from '../Modal.Elements/Modal.User.Edit/Modal.User.Edit'


import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isUpdateUserDataOpen } from '../../../redux/Modals/Modal.selectors'

export const UserEditComponent = () => {
	const dispatch = useDispatch()
	const modSelector = useSelector( isUpdateUserDataOpen )

	const modalClosed = () => {
		dispatch( Actions.modalEditUserAction( { isOpen: false } ) )
	}

	return (
		modSelector ?
		<ModalPortal>
			<ModalWindow modalClosed = { modalClosed }  >
				<ModalEdit />
			</ModalWindow>
		</ModalPortal> : null
	)
}
