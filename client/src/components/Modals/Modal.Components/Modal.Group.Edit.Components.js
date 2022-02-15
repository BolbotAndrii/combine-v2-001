import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'

import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isUpdateGroupDataOpen } from '../../../redux/Modals/Modal.selectors'
import { EditModalGroup } from "../Modal.Elements/Modal.Groups.Edit/Modal.Group.Edit";

export const GroupEditComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isUpdateGroupDataOpen )

    const modalClosed = () => {
        dispatch( Actions.modalEditGroupAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <EditModalGroup />
                </ModalWindow>
            </ModalPortal> : null
    )
}
