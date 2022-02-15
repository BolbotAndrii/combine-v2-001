import React from 'react'
import {ModalPortal} from "../../../common/Modal/Modal.portal"
import {ModalWindow} from "../Modal"
import {useDispatch, useSelector} from "react-redux"
import * as Actions from '../../../redux/Modals/Modals.action'
import {ModalShopCreateProduct} from "../Modal.Elements/Modal.Shop.Create.Product/Modal.Shop.Create.Product";
import {isShopCreateProductOpen} from "../../../redux/Modals/Modal.selectors";


export const ModalShopCreateProductComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isShopCreateProductOpen )

    const modalClosed = () => {
        dispatch( Actions.modalCreateProductAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalShopCreateProduct />
                </ModalWindow>
            </ModalPortal> : null
    )
}