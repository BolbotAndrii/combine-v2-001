import React, {useContext, useEffect, useState} from 'react';
import { QiwiWalletsElements } from "./Qiwi.Wallets.Elements/Qiwi.Wallets.Elements";
import s from './Qiwi.Wallets.module.css'
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../../redux/Modals/Modals.action";
import {
    deleteQiwiWallet, getCurrency,
    getQiwiWallets,
    getQiwiWalletsByLeadMark,
    getQiwiWalletsByMark
} from "../../../utils/api";
import {
    getBalance,
    isCreateQiwiWalletOpen,
    isTransferQiwiWalletOpen,
    isUpdateQiwiWalletOpen
} from "../../../redux/Modals/Modal.selectors";
import {AuthContext} from "../../../context/Auth.Context";
import {notification} from "../../../utils/notification";

export const QiwiWallets = () => {
    const dispatch = useDispatch()
    const [wallets, setWallets] = useState(null)
    const walletSelector = useSelector( isCreateQiwiWalletOpen )
    const walletSelectorUpd = useSelector( isUpdateQiwiWalletOpen )
    const walletSelectorTr = useSelector( isTransferQiwiWalletOpen )
    const [remove, setRemove] = useState(false)
    const { mark, userRole } = useContext(AuthContext)

    const [balanceUSD, setBalanceUSD] = useState(null)

    const balance = useSelector(getBalance)


    useEffect( () => {
        getCurrency()
            .then(( data  ) => {
                setBalanceUSD(data.data.curr[0].value)
            })
            .catch( e => console.error(e))

    },[balance])

    const addNewWallet = ( ) => {
        dispatch( Actions.modalCreateQiwiWalletAction( { isOpen: true, id: null } ) )
    }


    useEffect( () => {
        switch (userRole) {
            case 'administrator' :
                getQiwiWallets()
                    .then( ( { data } ) => setWallets( data ) )
                    .catch( e => console.log(e))
                    .finally( () => {

                    })
                break
            case 'buyer-lead' :
                getQiwiWalletsByLeadMark(mark)
                    .then( ( { data } ) => setWallets( data ) )
                    .catch( e => console.log(e))
                break
            case 'financier-admin' :
                getQiwiWalletsByMark(mark)
                    .then( ( { data } ) => setWallets( data ) )
                    .catch( e => console.log(e))
                break
            default: return
        }
    },[walletSelector, walletSelectorUpd, walletSelectorTr, remove, mark, userRole])


    const delQiwiWallet = (id) => {
        deleteQiwiWallet(id)
            .then( ( { data } ) => {
                setRemove((prev) => !prev )
                notification(data.message, 'backGround: green')
            } )
            .catch( e => {
                notification('An error occurred while deleting', 'backGround: red')
            })
    }



    return (
        <>
            {   userRole === 'financier-admin' ||
                userRole === 'administrator'
                ?
                   <div className={s.walletsTop}>
                       <button type='button' className={s.AddWBtn} onClick={ () => addNewWallet() } >Add wallet</button>
                       <div className={s.walletsSumm}>
                           Balance: <p> <span>{balance}</span>  RUB </p>
                           <p><span>{balanceUSD && (balanceUSD*balance).toFixed(2)}</span> USD</p>
                       </div>
                   </div>
                : null
            }

            { wallets &&
            <QiwiWalletsElements
                qiwiWallets={ wallets }
                delQiwiWallet={ delQiwiWallet }
            /> }
        </>
    )
}
