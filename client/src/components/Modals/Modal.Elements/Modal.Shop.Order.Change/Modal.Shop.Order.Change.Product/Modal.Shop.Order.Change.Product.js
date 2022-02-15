import React, {useEffect, useState} from 'react'
import {getProduct} from "../../../../../utils/api";
import s from './Modal.Shop.Order.Change.Product.module.css'
import {UPLOADS_ROUTE} from "../../../../../utils/consts";

export const ModalShopOrderChangeProduct = ( { product } ) => {
    const [item, setItem] = useState()

    useEffect( () => {
        getProduct(product)
            .then( ( { data } ) => {
                setItem( data )
            })
            .catch( e => console.error( e ) )
    }, [product])

    return (
        <>
            <div className={s.container}>
                <div>{item?.title}</div>
                <div className={s.prodImg}>
                    <img src={ UPLOADS_ROUTE + item?.img} alt=""/>
                </div>
                <div>{item?.price}</div>
            </div>
        </>
    )
}