import React from 'react'
import s from "./Shop.Order.Table.module.css";
import {ShopOrderTableElement} from "./Shop.Order.Table.Element/Shop.Order.Table.Element";

export const ShopOrderTable = ( { orders } ) => {
    return (
        <>
            <div className={ s.tableContainer }>
                <div className={ s.tableHeader }>
                    <span>id</span>
                    <span>Date</span>
                    <span>User</span>
                    <span>Sum</span>
                    <span>Products</span>
                    <span>Status</span>
                    <span>Change</span>
                </div>
                {
                    orders && orders.map( order => (
                        <ShopOrderTableElement order={order} key={order._id}/>
                    ))
                }

            </div>
        </>
    )
}