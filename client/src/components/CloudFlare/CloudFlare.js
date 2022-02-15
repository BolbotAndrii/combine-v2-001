import React, { useState} from 'react';
import {CloudFlareAccountElement} from "./CloudFlare.Acc.Element/CloudFlare.Acc.Element";
import {CloudFlareAccount} from "./CloudFlare.Acc/CloudFlare.Acc";
import s from './CloudFlare.module.css'
import {connectCFAccount} from "../../utils/api";

export const CloudFlare = () => {
    const [connect, setConnect] = useState(null)

    const connectAccount = ( id ) => {
        connectCFAccount( id )
            .then( data => {
                setConnect( data.data.result )
            })
            .catch( error => {
                console.log( error )
            })
    }

    const domainDetail = (id) => {
        console.log(id)
    }


    return (
        <div className={s.container}>
            <CloudFlareAccountElement accountData={connect} domainDetail={domainDetail} />
            <CloudFlareAccount connectAccount={connectAccount}/>
        </div>
    )
}

