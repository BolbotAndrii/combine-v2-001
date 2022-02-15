import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'

import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isTransferQiwiWalletOpen } from '../../../redux/Modals/Modal.selectors'
import {ModalWalletsTransfer} from "../Modal.Elements/Modal.Wallets.Transfer/Modal.Wallets.Transfer";




export const QiwiWalletsTransferComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isTransferQiwiWalletOpen )

    const modalClosed = () => {
        dispatch( Actions.modalTtransferQiwiWalletAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalWalletsTransfer />
                </ModalWindow>
            </ModalPortal> : null
    )
}
