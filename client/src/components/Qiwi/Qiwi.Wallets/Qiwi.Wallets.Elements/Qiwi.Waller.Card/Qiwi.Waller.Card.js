import React, {useContext, useEffect, useState} from 'react'
import s from "../Qiwi.Wallets.Elements.module.css"
import { getQiwiWallet } from "../../../../../utils/api"
import * as Actions from "../../../../../redux/Modals/Modals.action"
import {useDispatch} from "react-redux"
import {AuthContext} from "../../../../../context/Auth.Context"



export const QiwiWallerCard = ( { mark, number, id, delQiwiWallet } ) => {
    const dispatch = useDispatch()
    const [wallet, setWallet] = useState(null)
    const {userRole} = useContext(AuthContext)

    useEffect( () => {
        getQiwiWallet(number)
            .then( ( { data } ) => {
                setWallet( data )
                dispatch(Actions.balance(data.balance.amount))
            } )
            .catch( e => console.error( e ))
           return () => {
               dispatch(Actions.unsetBalance())
           }
    },[number, dispatch])



    const updateHandlerQiwiWallet = ( id ) => {
        dispatch( Actions.modalUpdateQiwiWalletAction( { isOpen: true, id } ) )
    }

    const transferHandlerQiwiWallet = ( id ) => {
        dispatch( Actions.modalTtransferQiwiWalletAction( { isOpen: true, id } ) )
    }


    return (
        <>
            {
                wallet && (
                    <div className={ s.element }>
                        <div className={ s.elementHeader }>
                            <h6>{mark}</h6>
                            <div>+{number}</div>
                        </div>
                        <div className={ s.elementBody }>
                            <div>Balance:</div>
                            <div className={s.count}>
                                <span> { wallet.balance.amount }</span>
                                <span>Rub</span>
                            </div>
                        </div>
                        {   userRole === 'financier-admin' ||
                            userRole === 'administrator'
                            ?
                            <div className={s.elementControl}>
                                <button type="submit" className={s.btnUpdate}
                                        onClick={() => updateHandlerQiwiWallet(id)}>
                                    <i className="material-icons">sync</i>
                                    <p>Update</p>
                                </button>
                                <button type="submit" className={s.btnTransfer}
                                            onClick={() => transferHandlerQiwiWallet(id)}>
                                        <i className="material-icons">swap_horiz</i>
                                    <p>Transfer</p>
                                </button>

                                <button type="submit" className={s.btnDelete} onClick={() => delQiwiWallet(id)}>
                                    <i className="material-icons">clear</i>
                                </button>
                            </div> : null
                        }
                    </div>
                )
            }

        </>
    )
}