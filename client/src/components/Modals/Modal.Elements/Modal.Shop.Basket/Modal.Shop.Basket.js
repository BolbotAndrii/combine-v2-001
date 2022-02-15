import React, { useContext, useEffect, useState } from 'react'
import s from './Modal.Shop.Basket.module.css'
import { ShopBasketElement } from "../../../Shop/Shop.Basket.Element/Shop.Basket.Element"
import { deleteProductFromBasket, getUserBasket, createUserOrder } from "../../../../utils/api"
import { AuthContext } from "../../../../context/Auth.Context"
import { notification } from "../../../../utils/notification"
import { EmptyData } from "../../../../common/EmptyData/EmptyData"
import { useDispatch, useSelector } from "react-redux"
import * as shopActions from '../../../../redux/Shop/Shop.action'
import * as ModalActions from '../../../../redux/Modals/Modals.action'
import {getCoinCount, getSumBasket} from "../../../../redux/Shop/Shop.selector"



export const ModalShopBasket = () => {
    const userData = useContext( AuthContext )
    const [products, setProducts] = useState( [] )
    const dispatch = useDispatch()
    const sumBasket = useSelector( getSumBasket )
    const userCoins = useSelector( getCoinCount )


    useEffect( ( ) => {

            getUserBasket( userData.userId )
                .then( ( { data } ) => {
                    setProducts( data.products )
                })
                .catch( e => {
                    console.error(e)
                })

    },[ userData.userId, sumBasket, userCoins ] )

    const deleteElement = ( prodId, price ) => {
        deleteProductFromBasket( userData?.userId, prodId )
            .then( ( { data } ) => {
                getUserBasket( userData?.userId )
                    .then( ( { data } ) => {
                        setProducts( data.products )
                        dispatch( shopActions.unsetBasketSumAction( price ) )

                    })
                    .catch( e => {
                        console.error(e)
                    })
                dispatch( shopActions.unsetBasketCountAction(1))
                notification( data.message, 'backGround: blue' )
            } )
            .catch( e => {
                console.error(e)
            })
    }

    const createOrder = () => {
        const orderData = {
            orderProducts:  products,
            orderUserMark:  userData?.mark,
            orderSum:       sumBasket,
            orderUser:      userData?.userId
        }


        if ( userCoins >= sumBasket ) {
            createUserOrder( orderData )
                .then( ( { data } ) => {
                    notification( data.message, 'backGround: orange' )
                    dispatch( shopActions.nullBasketSumAction(0) )
                    dispatch( shopActions.nullBasketCountAction(0) )
                    dispatch( shopActions.unsetCoinsCountAction( sumBasket ) )
                    dispatch( ModalActions.modalShopBasketAction( { isOpen: false } ) )

                })
                .catch( e => console.error( e ) )
        }
        else {
           return notification('You don\'t have enough coins', 'backGround: red')
        }

        console.log(userCoins)
    }
    return (
        <>
                <div className={s.container}>
                    <h4 className={s.basketName}>Basket</h4>
                    { products.length !== 0 ?
                       <>
                           <div className={s.basketBody}>
                               { products && products.map(item => (
                                   <ShopBasketElement
                                       key={item}
                                       productId={item}
                                       deleteElement={deleteElement}
                                   />
                               ))}
                           </div>

                           <div className={s.basketControl}>
                               <button
                                   type='submit'
                                   className={`${s.buttonCheckOut} btn waves-effect waves-light btn-large`}
                                   onClick={ () => createOrder() }
                               >
                                   <span>Checkout</span>
                                   <i className="small material-icons ">check</i>
                               </button>
                               <p className={s.basketSum}>
                                   <span>Sum:</span>
                                   <span>{sumBasket}</span>
                                   <i className="amber-text text-lighten-2 small material-icons ">monetization_on</i>
                               </p>
                           </div>
                       </>
                        : <EmptyData text={` is empty yet`} name={`Basket`} />   }
                </div>
        </>
    )
}