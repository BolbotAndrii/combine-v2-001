import React, {useEffect, useState} from 'react'
import {ShopOrderTable} from "../Shop.Order.Table/Shop.Order.Table"
import {getAllOrders} from "../../../utils/api"
import {Spinner} from "../../../common/Loader/Loader"
import {useSelector} from "react-redux";
import {isShopUpdateOrderOpen} from "../../../redux/Modals/Modal.selectors";


export const ShopOrders = () => {
    const [orders, setOrders] = useState()
    const modSel = useSelector(isShopUpdateOrderOpen)

    useEffect( () => {
        getAllOrders()
            .then( ( { data } ) => {
                setOrders( data.reverse() )
            })
            .catch( e => console.error( e ) )
    }, [modSel])

    return (
        !orders
            ? <Spinner />
            : <ShopOrderTable orders = { orders } />
    )
}