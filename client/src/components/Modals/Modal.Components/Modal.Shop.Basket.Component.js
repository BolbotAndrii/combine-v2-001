import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'
import { ModalShopBasket } from '../Modal.Elements/Modal.Shop.Basket/Modal.Shop.Basket'


import * as Actions from '../../../redux/Modals/Modals.action'
import * as ShopActions from '../../../redux/Shop/Shop.action'
import { useDispatch, useSelector } from 'react-redux'

import { isShopBasketOpen } from '../../../redux/Modals/Modal.selectors'

export const ShopBasketComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isShopBasketOpen )

    const modalClosed = () => {
        dispatch( Actions.modalShopBasketAction( { isOpen: false } ) )
        dispatch( ShopActions.nullBasketSumAction(0) )
        dispatch( ShopActions.nullCoinsCountAction(0) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalShopBasket />
                </ModalWindow>
            </ModalPortal> : null
    )
}
