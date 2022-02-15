import React from 'react';
import s from './CloudFlare.Acc.Element.module.css'
import { DomainStatus } from "../../../utils/ui/domainStatus";
import { Waiting } from "../../../common/WaitToGetData/Waiting";


export const CloudFlareAccountElement = ( { accountData, domainDetail } ) => {
    return (
        <div className={s.container}>
            { !accountData
                ? <Waiting text='Please connect to your account'/>
                : accountData.map( ( { id, name, status } ) => (

                    <div className={s.card} key={ id }>
                        <DomainStatus mark={status}/>
                        <div className={s.name}> {name} </div>
                        <div>
                            <button className={s.cardBtn} onClick={ () => domainDetail(id)}> More</button>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}