import React, {useContext, useEffect, useState} from 'react'
import {ShopCard} from "./Shop.Card/Shop.Card"
import s from './Shop.Catalog.module.css'
import {getProducts, setProductToBasket} from "../../../utils/api"
import {notification} from "../../../utils/notification"
import {AuthContext} from "../../../context/Auth.Context"
import {useDispatch, useSelector} from "react-redux"
import * as Actions from '../../../redux/Shop/Shop.action'
import {isShopBasketOpen} from "../../../redux/Modals/Modal.selectors";

export const ShopCatalog = () => {
    const [products, setProducts] = useState([])
    const auth = useContext(AuthContext)
    const dispatch = useDispatch()
    const basketCl = useSelector(isShopBasketOpen)



    useEffect(() => {
        getProducts()
            .then( ( { data } ) => {
                setProducts(data)
            })
            .catch( e => {
               console.error(e)
            })
    },[basketCl])


    const addToBasket = ( id ) => {
        setProductToBasket( auth?.userId, id )
            .then( ( { data } ) => {
                dispatch( Actions.basketCountAction(1) )
                notification( data.message, 'backGround: green' )
            })
            .catch(
                e => console.log( e )
            )
    }

    return (
        <div className={s.container}>
            { products && products.filter( elem => elem.count > 0).map( item => (
                <ShopCard
                    item={item}
                    addToBasket={ addToBasket }
                    key={item._id}
                />
            ) ) }
        </div>
    )
}