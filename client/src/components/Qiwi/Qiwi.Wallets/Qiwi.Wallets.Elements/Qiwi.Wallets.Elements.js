import React from 'react'
import s from './Qiwi.Wallets.Elements.module.css'
import { QiwiWallerCard } from './Qiwi.Waller.Card/Qiwi.Waller.Card'
export const QiwiWalletsElements = ( { qiwiWallets, delQiwiWallet } ) => {

    return (
        <>
            <div className={ s.container }>
                { qiwiWallets && qiwiWallets.map( ( { _id: id, mark, number, token } )  =>
                    (
                        <QiwiWallerCard
                            mark={mark}
                            number={number}
                            token={token}
                            key={id}
                            id={id}
                            delQiwiWallet={ delQiwiWallet }
                        />
                    )
                ) }
            </div>
        </>
    )
}