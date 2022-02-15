import React, {useEffect, useState} from 'react'
import { KeitaroTableView } from "./Keitaro.Offers.Table/Keitaro.TableView";
import { getOffers } from "../../../utils/api";
import { Spinner } from '../../../common/LocalLoader/Loader'

export const KeitaroOffers = () => {
    const [offers, setOffers] = useState()

    useEffect( () => {
        getOffers()
            .then( ( { data } ) => {
                setOffers( data )
            } )
            .catch( e => console.error( e ) )
    }, [])

    return (
        <>
            { !offers ? <Spinner /> : <KeitaroTableView offers={ offers }/> }
        </>
    )
}