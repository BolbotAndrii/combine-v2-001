import React, {useEffect, useState} from 'react'
import { KeitaroTableView } from "./Keitaro.Domains.Table/Keitaro.TableView"
import {getDomains} from "../../../utils/api"
import { Spinner } from "../../../common/LocalLoader/Loader";
import s from './Keitaro.Domains.module.css'
import * as Actions from "../../../redux/Modals/Modals.action";
import { useDispatch, useSelector } from "react-redux";
import { isChangeCampaignOpen } from "../../../redux/Modals/Modal.selectors";


export const KeitaroDomains = () => {
    const [domains, setDomains] = useState()
    const dispatch = useDispatch()
    const modSel = useSelector( isChangeCampaignOpen )

    useEffect( () => {
        getDomains()
            .then( ( { data } ) => {
                setDomains(data)
            })
            .catch( e => {
                console.error( e )
            })
    },[modSel])

    const viewGroupDomCampaign = ( id ) => {
        dispatch(Actions.modalChangeCampaignAction( { isOpen: true, id } ) )
    }

    return (
        <>
            {
                !domains
                    ? <Spinner />
                    : <KeitaroTableView
                        domains={ domains }
                        className={s.viewContainer}
                        viewGroupDomCampaign={ viewGroupDomCampaign }
                    />
            }
        </>
    )
}
