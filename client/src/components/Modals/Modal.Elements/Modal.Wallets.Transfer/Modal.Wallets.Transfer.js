import React, { useEffect, useState } from 'react'
import s from "./Modal.Wallets.Transfer.module.css"
import {createQiwiLog, getQiwiWalletFromDB, transferQiwiWallet} from "../../../../utils/api"
import { useDispatch, useSelector } from "react-redux";
import { transferQiwiWalletId } from "../../../../redux/Modals/Modal.selectors"
import * as Actions from "../../../../redux/Modals/Modals.action"
import {notification} from "../../../../utils/notification";
import {Spinner} from "../../../../common/LocalLoader/Loader"

export const ModalWalletsTransfer = () => {
    const [value, setValue] = useState({})
    const [who, setWho] = useState(null)
    const walletId = useSelector( transferQiwiWalletId )
    const dispatch = useDispatch()

    useEffect( () => {
        getQiwiWalletFromDB( walletId )
            .then( ( { data } ) => {
                setWho(data)
            })
            .catch( e => console.error( e ))
    }, [walletId])

    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const submitTransferQiwiWallet = ( e ) => {
        e.preventDefault()
        transferQiwiWallet(who.token, value)
            .then( ( { data } ) => {
                dispatch( Actions.modalTtransferQiwiWalletAction( { isOpen: false, id: null } ))
                notification( data.message, 'backGround: green' )
            })
            .catch( e => {
                notification( e, 'backGround: red' )
            })

        createQiwiLog(who.number, value)
            .then( ( { data } ) => {
                console.log( data )
            } )
            .catch( e => console.log(e))
    }

    return (
        <>
            { !who ? <Spinner /> :
            <div className={s.formContainer}>
                <h5 className={s.header}>Transfer cash from: <span className="blue-text text-darken-2">( {who.mark} ) - {who.number}</span> to : </h5>
                <form className={s.form} onSubmit={ submitTransferQiwiWallet } >
                    <div className={s.fieldsBody}>
                        <div className="input-field col s6">
                            <label htmlFor="qiwi-phone">Phone <span className="red-text text-darken-3">( full phone with a + )</span></label>
                            <input
                                value={value.qiwiPhone}
                                onChange={valueHandler}
                                name="qiwiPhone"
                                id='qiwi-phone'
                                type="text"
                                autoComplete="text"
                                required
                            />
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="qiwi-amount">Amount  <span className="red-text text-darken-3">( RUB )</span></label>
                            <input
                                value={value.qiwiAmount}
                                onChange={valueHandler}
                                name="qiwiAmount"
                                id='qiwi-amount'
                                type="text"
                                autoComplete="text"
                                required
                            />
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="qiwi-comment">Comment</label>
                            <textarea
                                id="qiwi-comment"
                                className="materialize-textarea"
                                value={value.qiwiComment}
                                onChange={valueHandler}
                                name="qiwiComment"
                            />

                        </div>
                    </div>
                    <div>
                        <button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}`} type="submit"
                                name="action">
                            <div>Transfer</div>
                            <i className="material-icons">send</i>
                        </button>
                    </div>
                </form>
            </div>
            }
        </>
    )
}