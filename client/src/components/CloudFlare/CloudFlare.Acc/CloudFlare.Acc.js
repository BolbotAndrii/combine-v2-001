import React, {useEffect, useState} from 'react';
import { getCFAccounts, deleteCFAccount } from "../../../utils/api";
import { CloudFlareAccTable } from './CloudFlare.Acc.Table/CloudFlare.Acc.Table'

export const CloudFlareAccount = ( { connectAccount } ) => {
    const [account, setAccount] = useState(null)
    const [remove, setRemove] = useState(false)


    useEffect( () => {
        getCFAccounts()
            .then( ( data ) => {
                setAccount(data.data)
            })
            .catch( ( error ) => console.log( error ) )
    }, [remove])

    const deleteAccount = ( id ) => {
        deleteCFAccount( id )
            .then( data => {
                setRemove( data.data )
                })
            .catch( error => {
                console.error( error )
            })
    }

    return (

        <>
            {   account
                ?
                    <CloudFlareAccTable
                        account={ account }
                        deleteAccount={ deleteAccount }
                        connectAccount={ connectAccount }
                    />
                :
                    <h2>Account table is empty</h2>
            }
        </>

    )
}