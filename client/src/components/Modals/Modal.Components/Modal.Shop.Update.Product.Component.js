import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {isShopUpdateProductOpen} from "../../../redux/Modals/Modal.selectors";
import * as Actions from "../../../redux/Modals/Modals.action";
import {ModalPortal} from "../../../common/Modal/Modal.portal";
import {ModalWindow} from "../Modal";
import {ModalShopUpdateProduct} from "../Modal.Elements/Modal.Shop.Update.Product/Modal.Shop.Update.Product";

export const ModalShopUpdateProductComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isShopUpdateProductOpen )

    const modalClosed = () => {
        dispatch( Actions.modalUpdateProductAction( { isOpen: false, id: null } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalShopUpdateProduct />
                </ModalWindow>
            </ModalPortal> : null
    )
}