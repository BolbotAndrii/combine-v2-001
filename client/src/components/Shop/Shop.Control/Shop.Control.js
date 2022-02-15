import React, { useContext, useEffect, useState } from 'react'
import s from './Shop.Control.module.css'
import { useDispatch, useSelector } from "react-redux"
import * as Actions from '../../../redux/Modals/Modals.action'
import * as ShopActions from '../../../redux/Shop/Shop.action'
import { AuthContext } from "../../../context/Auth.Context"
import { getUserBasket, getUserCoins } from '../../../utils/api'
import { getCountBasket } from '../../../redux/Shop/Shop.selector'

export const ShopControl = () => {
    const [coins, setCoins] = useState(null)
    const [prodCount, setProdCount] = useState(0)
    const dispatch = useDispatch()
    const userData = useContext(AuthContext)
    const basketCount = useSelector(getCountBasket)
    const coinSel = useSelector(getUserCoins)

    useEffect( () => {
        getUserCoins( userData.userId )
            .then( ( { data } ) => {
                setCoins( data.coins )
            })
            .catch( e => console.error( e ))

    }, [ userData.userId, coins, coinSel ] )

    useEffect( () => {
        getUserBasket(  userData?.userId  )
            .then( ( { data } ) => {
                setProdCount( data.products )
            })
            .catch( e => {
                console.error(e)
            })
    },[ basketCount, userData.userId ] )

    const openBasket = () => {
        dispatch( Actions.modalShopBasketAction( { isOpen: true } ) )
        dispatch( ShopActions.coinsCountAction( coins ) )
    }


    return (
        <div className={s.controlCont}>
            <div className={s.coinsCont}>
                <i className="amber-text text-lighten-2 small material-icons ">monetization_on</i>
                <p>{ coins }</p>
            </div>

          <div className={s.rightControl}>
              {/*<div className={s.order}>*/}
              {/*    <i className="material-icons small">history</i>*/}
              {/*    <span>Purchase history</span>*/}
              {/*</div>*/}
              <div className={s.basketCont} onClick={ openBasket }>
                  <span>{prodCount?.length}</span>
                  <i className="material-icons small">shopping_basket</i>
              </div>
          </div>
        </div>
    )
}