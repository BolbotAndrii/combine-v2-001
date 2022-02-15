import React, {useContext, useEffect, useState} from 'react'
import s from "./Modal.Wallets.Add.module.css"
import {createQiwiWallet, getUsersByOptions} from "../../../../utils/api"
import * as Actions from "../../../../redux/Modals/Modals.action"
import {useDispatch} from "react-redux"
import {notification} from "../../../../utils/notification"
import {AuthContext} from "../../../../context/Auth.Context"

export const ModalWalletsAdd = () => {
    const auth = useContext(AuthContext)
    const [value, setValue] = useState({ qiwiUser: auth.mark } )
    const [qiwiLead, setQiwiLead] = useState(null)
    const dispatch = useDispatch()


    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value } )
    }

    useEffect( () => {
        getUsersByOptions( 'buyer-lead')
            .then( ( { data } )  => {
                setQiwiLead( data )
                const elems = document.getElementById("buyer-leads");
                window.M.FormSelect.init(elems);
            })
            .catch( e => {
                console.error( e )
            })
    }, [])


    const addQiwiWallet = (e) => {
        e.preventDefault()

        createQiwiWallet( value )
            .then( ( { data } ) => {
                dispatch( Actions.modalCreateQiwiWalletAction( { isOpen: false, id: null } ) )
                notification( data.message,'backGround: green' )
            })
            .catch( e => {
                notification('An error while creating wallet', 'backGround: red')
            })
    }

    return (
        <>
            <h3 className={s.header}>Add new QiWi wallet</h3>
            <form className={s.form} onSubmit={ addQiwiWallet }>
                <div className={s.fieldsBody}>
                    <div className="input-field col s6">
                        <label htmlFor="user-name"> User name</label>
                        <input
                            value={ value.qiwiName }
                            onChange={ valueHandler }
                            name="qiwiName"
                            id='qiwi-name'
                            type="text"
                            autoComplete="text"
                            required
                        />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="qiwi-phone">Phone</label>
                        <input
                            value={ value.qiwiPhone }
                            onChange={ valueHandler }
                            name="qiwiPhone"
                            id='qiwi-phone'
                            type="text"
                            autoComplete="text"
                            required
                        />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="qiwi-token">Token</label>
                        <input
                            value={ value.qiwiToken }
                            onChange={ valueHandler }
                            name="qiwiToken"
                            id='qiwi-name'
                            type="text"
                            autoComplete="text"
                            required
                        />
                    </div>
                </div>
                <div className="input-field">
                    <select
                        name="qiwiLeads"
                        id="buyer-leads"
                        required
                        onChange={valueHandler}
                    >
                        <option disabled >Choose buyer lead</option>
                        <option key='nothing' value='' >Nothing</option>
                        {qiwiLead && qiwiLead.map(item =>
                            <option
                                key={item.id}
                                value={item.userMark}
                            >{item.userName} - {item.userMark}</option>
                        )}

                    </select>
                    <label>Select lead</label>
                </div>
                <div>
                    <button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}` } type="submit" name="action">
                        <div>Create wallet</div>
                        <i className="material-icons">send</i>
                    </button>
                </div>
            </form>
        </>
    )
}