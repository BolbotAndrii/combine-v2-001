import React, {useState, useEffect} from 'react';
import { KeitaroTableView } from './Keitaro.Campaings.Table/Keitaro.TableView'
import { getCampaings } from '../../../utils/api'
import {Spinner} from "../../../common/LocalLoader/Loader";

export const KeitaroCampaing = () => {
    const [campaing, setCampaing] = useState();

    useEffect(() => {
        getCampaings()
            .then( ({ data }) => setCampaing(data) )
    }, [])

    return (
        <>
            { !campaing ? <Spinner /> : <KeitaroTableView campaings={ campaing } /> }
        </>
    )
}
