import React from 'react';
import s from './Keitaro.TableView.module.css'

export const KeitaroTableView = ( { domains, viewGroupDomCampaign } ) => {
    return (
        <div className={ s.tableContainer }>
            <div className={ s.tableHeader }>
                <span>id</span>
                <span>User</span>
                <span>Name</span>
                <span>Campaign</span>
                <span>Status</span>
                <span>SSL status</span>
                <span className={s.buttonCont}>Change campaign</span>
                {/*<span className={s.buttonCont}>Check</span>*/}
            </div>
            {
                domains.map( ( { id, name, network_status, ssl_status, default_campaign } ) => (
                    <div className={ s.tableRow} key={ id }>
                        <span>{ id }</span>
                        <span></span>
                        <span>{ name }</span>
                        <span className={s.buttonCamp}>{ default_campaign }</span>
                        <span className={ network_status !== 'error' ? s.success : s.error }>{ network_status }</span>
                        <span className={ ssl_status === 'error' ? s.error : ssl_status === 'request_limit' ? s.limited : s.success }>{ ssl_status }</span>
                        <span className={s.buttonCont}>
                            <button type='submit' className={ `blue-text ${ s.tableBtn }` } onClick={ () => viewGroupDomCampaign( id ) }>Change</button>
                        </span>
                        {/*<span className={s.buttonCont}>*/}
                        {/*    <button type='submit' className={ `green-text ${ s.tableBtnCheck }` }>Check</button>*/}
                        {/*</span>*/}
                    </div>
                ))
            }
        </div>
    )
}