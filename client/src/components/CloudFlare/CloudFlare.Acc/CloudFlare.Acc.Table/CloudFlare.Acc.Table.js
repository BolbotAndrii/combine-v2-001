import React from 'react';
import s from './CloudFlare.Acc.Table.module.css'

export const CloudFlareAccTable = ( { account, deleteAccount, connectAccount } ) => {
    return (
            <>
                <div className={ s.tableContainer }>
                    <div className={ s.tableHeader }>
                        <span>Email</span>
                        <span>Password</span>
                        <span className={s.btnHeader}>Connect</span>
                        <span className={s.btnHeader}>Remove</span>
                    </div>
                    { account && account.map( ( { _id:id, cfEmail, cfPassword })  => (
                        <div className={ s.tableRow} key={ id }>
                            <span>{ cfEmail }</span>
                            <span>{ cfPassword }</span>
                            <button className={ `blue-text ${ s.tableBtn }` } onClick={ () => connectAccount( id ) }>
                                Connect
                            </button>
                            <button className={ `red-text ${ s.tableBtn }`} onClick={ () => { deleteAccount( id ) } }>
                                Delete
                            </button>
                        </div>
                    )) }
                </div>
            </>
    )
}
