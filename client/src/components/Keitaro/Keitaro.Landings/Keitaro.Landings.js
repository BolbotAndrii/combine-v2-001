import React, {useEffect, useState} from 'react'
import { KeitaroTableView } from "./Keitaro.Landings.Table/Keitaro.TableView";
import { getLandings } from "../../../utils/api";
import { Spinner } from '../../../common/LocalLoader/Loader'

export const KeitaroLandings = () => {
    const [landings, setLandings] = useState()

    useEffect( () => {
        getLandings()
            .then( ( { data } ) => {
                setLandings( data )
            } )
            .catch( e => console.error( e ) )
    }, [])

    return (
        <>
            { !landings ? <Spinner /> : <KeitaroTableView landings={ landings }/> }
        </>
    )
}