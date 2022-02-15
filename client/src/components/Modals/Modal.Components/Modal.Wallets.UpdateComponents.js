import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'

import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isUpdateQiwiWalletOpen } from '../../../redux/Modals/Modal.selectors'
import { ModalWalletsUpdate } from "../Modal.Elements/Modal.Wallets.Update/Modal.Wallets.Update";



export const QiwiWalletsUpdateComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isUpdateQiwiWalletOpen )

    const modalClosed = () => {
        dispatch( Actions.modalUpdateQiwiWalletAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalWalletsUpdate />
                </ModalWindow>
            </ModalPortal> : null
    )
}
