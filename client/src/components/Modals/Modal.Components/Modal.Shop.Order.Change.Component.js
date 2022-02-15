import React from 'react'
import {ModalPortal} from "../../../common/Modal/Modal.portal"
import {useDispatch, useSelector} from "react-redux"
import {isShopUpdateOrderOpen} from "../../../redux/Modals/Modal.selectors"
import * as Actions from "../../../redux/Modals/Modals.action"
import {ModalShopOrderChange} from "../Modal.Elements/Modal.Shop.Order.Change/Modal.Shop.Order.Change";
import {ModalWindowFull} from "../ModalFull"

export const ModalShopOrderChangeComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isShopUpdateOrderOpen )

    const modalClosed = () => {
        dispatch( Actions.modalUpdateOrderAction( { isOpen: false } ) )
    }

    return (

            modSelector ?
            <ModalPortal>
                <ModalWindowFull modalClosed = { modalClosed }  >
                    <ModalShopOrderChange />
                </ModalWindowFull>
            </ModalPortal> : null

    )
}