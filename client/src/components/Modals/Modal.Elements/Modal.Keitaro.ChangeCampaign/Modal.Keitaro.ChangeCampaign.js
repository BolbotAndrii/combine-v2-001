import React, {useEffect, useState} from 'react';
import {getCampaignsNames, getDomain, setNewCampaign} from "../../../../utils/api";
import {useSelector} from "react-redux";
import {changeCampaignId} from "../../../../redux/Modals/Modal.selectors";
import s from "../Modal.Keitaro.ChangeCampaign/Modal.Keitaro.ChangeCampaign.module.css";
import {notification} from "../../../../utils/notification";
import {Spinner} from "../../../../common/LocalLoader/Loader";

export const ModalKeitaroChangeCampaign = () => {
    const [domain, setDomain] = useState(null)
    const [campaigns, setCampaigns] = useState()
    const [value, setValue] = useState()
    const domId = useSelector(changeCampaignId)


    const valueHandler = (e) => {
        setValue( e.target.value )
    }

    useEffect(() => {
        const elems = document.getElementById("user-group");
        window.M.FormSelect.init(elems);

    }, [campaigns])


    useEffect(() => {
        getDomain(domId)
            .then(({data}) => {
                setDomain(data)
            })
            .catch(err => console.error(err))

        getCampaignsNames()
            .then(({data}) => {
                setCampaigns(data)
            })
    }, [domId])


    const onSubmitHandler = (e) => {
        e.preventDefault()

        const dataForm = {
            'domainId': domain.id,
            'campaignId': value
        }


        setNewCampaign(dataForm)
            .then( data  => {
                if( data.status === 200 ) {
                    notification(data.data.message, 'backGround: green')
                }
            } )
            .catch( e => {
                notification(e, 'backGround: red')
            })
    }


    return (
        !campaigns ? <Spinner />:
        <>
            <h5 className={s.header}>{domain.name} </h5>
            <form onSubmit={onSubmitHandler} className={s.form}>



                    <div className="input-field">
                        <select
                            name="campaignId"
                            id="user-group"
                            required
                            onChange={valueHandler}

                        >
                            <option disabled>Choose user group</option>
                            {campaigns && campaigns.map(item =>
                                <option
                                    key={item.id}
                                    name={item.name}
                                    value={item.id}
                                >{item.name} - {item.id}</option>
                            )}

                        </select>
                        <label>Select campaign</label>
                    </div>

                <div className={s.modalBottom}>
                    <button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}`} type="submit"
                            name="action">
                        <div>Change</div>
                        <i className="material-icons">send</i>
                    </button>
                </div>
                <input type="hidden" name='domainId' value={domain.id}/>
            </form>

        </>

    )
}


