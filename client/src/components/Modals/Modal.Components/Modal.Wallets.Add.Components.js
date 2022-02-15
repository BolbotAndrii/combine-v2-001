import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'

import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isCreateQiwiWalletOpen } from '../../../redux/Modals/Modal.selectors'
import { ModalWalletsAdd } from "../Modal.Elements/Modal.Wallets.Add/Modal.Wallets.Add";


export const QiwiWalletsComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isCreateQiwiWalletOpen )

    const modalClosed = () => {
        dispatch( Actions.modalCreateQiwiWalletAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalWalletsAdd />
                </ModalWindow>
            </ModalPortal> : null
    )
}
