import React  from 'react'
import s from "./Shop.Order.Table.Element.module.css"
import {useDispatch} from "react-redux"
import * as ModalActions from '../../../../redux/Modals/Modals.action'
import {TimeFormatter} from "../../../../utils/ui/timeFormatter";

export const ShopOrderTableElement = ({order}) => {
    const dispatch = useDispatch()


    const openModalOrderUpdate = () => {
        dispatch( ModalActions.modalUpdateOrderAction( { isOpen: true, id: order._id } ) )
    }

    return (
        <>
            <div className={s.tableRow}>
                <span>{order._id}</span>
                <span>
                    <TimeFormatter date={order.date} />
                </span>
                <span>{order.mark}</span>
                <span>{order.sum}</span>
                <span>{order.products.length}</span>
                <span>
                    {order.status}
                </span>
                <span className={s.buttonCont}>
                    <button
                        type='submit'
                        className={`blue-text ${s.tableBtn}`}
                        onClick={openModalOrderUpdate}
                    >Change</button>
                </span>
            </div>
        </>
    )
}