import React, {useEffect, useState} from 'react'
import s from "./Shop.Basket.Element.module.css"
import {getProduct} from "../../../utils/api"
import {UPLOADS_ROUTE} from "../../../utils/consts"
import {useDispatch} from "react-redux"
import * as Actions from '../../../redux/Shop/Shop.action'

export const ShopBasketElement = ( { productId, deleteElement } ) => {
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()


    useEffect( () => {
        getProduct( productId )
            .then( ( { data } ) => {
                setProduct( data )
                dispatch(Actions.basketSumAction(data.price))
            } )
            .catch( e =>  console.error(e) )
    }, [productId, dispatch])

    return (
        <>
            { product &&
                <div className={s.product}>
                    <div className={s.basketImg}>
                        <img src={ UPLOADS_ROUTE + product.img} alt=""/>
                    </div>
                    <p className={s.name}>{product.title}</p>
                    <p className={s.price}>{product.price}</p>
                    <button type='submit' className={s.deleteProduct}  onClick={ () => { deleteElement( productId, product.price ) }}>
                        <i className="material-icons">clear</i>
                    </button>
                </div>
            }
        </>


    )
}