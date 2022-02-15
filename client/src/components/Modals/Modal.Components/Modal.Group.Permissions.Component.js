import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'

import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isShowGroupPermOpen } from '../../../redux/Modals/Modal.selectors'
import { GroupPermissions } from "../Modal.Elements/Modal.Group.Permissions/Modal.Group.Permissions";

export const GroupPermissionsComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isShowGroupPermOpen )

    const modalClosed = () => {
        dispatch( Actions.modalGetPermAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <GroupPermissions />
                </ModalWindow>
            </ModalPortal> : null
    )
}
