import React from 'react'
import { ModalPortal } from '../../../common/Modal/Modal.portal'
import { ModalWindow } from '../Modal'

import * as Actions from '../../../redux/Modals/Modals.action'
import { useDispatch, useSelector } from 'react-redux'

import { isChangeCampaignOpen } from '../../../redux/Modals/Modal.selectors'
import { ModalKeitaroChangeCampaign } from "../Modal.Elements/Modal.Keitaro.ChangeCampaign/Modal.Keitaro.ChangeCampaign";

export const CampaignChangeComponent = () => {
    const dispatch = useDispatch()
    const modSelector = useSelector( isChangeCampaignOpen )

    const modalClosed = () => {
        dispatch( Actions.modalChangeCampaignAction( { isOpen: false } ) )
    }

    return (
        modSelector ?
            <ModalPortal>
                <ModalWindow modalClosed = { modalClosed }  >
                    <ModalKeitaroChangeCampaign />
                </ModalWindow>
            </ModalPortal> : null
    )
}
