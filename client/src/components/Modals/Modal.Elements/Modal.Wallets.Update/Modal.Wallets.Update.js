import React, {useEffect, useLayoutEffect, useState} from 'react'
import s from "./Modal.Wallets.Update.module.css";
import { getQiwiWalletFromDB, getUsersByOptions, updateQiwiWallet} from "../../../../utils/api";
import {useDispatch, useSelector} from "react-redux";
import { updateQiwiWalletId } from "../../../../redux/Modals/Modal.selectors";
import * as Actions from "../../../../redux/Modals/Modals.action";
import {Spinner} from "../../../../common/LocalLoader/Loader";
import {notification} from "../../../../utils/notification";

export const ModalWalletsUpdate = () => {
    const [value, setValue] = useState({ qiwiLeads: " " })
    const [qiwiLead, setQiwiLead] = useState([])
    const walletId = useSelector( updateQiwiWalletId )
    const dispatch = useDispatch()

    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    useEffect( () => {
        getQiwiWalletFromDB(walletId)
            .then( ( { data } ) => {
                setValue(data)
            } )
            .catch( e => console.log(e))

    }, [walletId])

    useLayoutEffect( () => {
        getUsersByOptions( 'buyer-lead')
            .then( ( { data } )  => {
                setQiwiLead(data)
                window.M.FormSelect.init(document.getElementById("buyer-leads"), {});
            })
            .catch( e => {
                console.error(e)
            })
    },[])

    const submitUpdatedQiwiWallet = (e) => {
        e.preventDefault()
        updateQiwiWallet(walletId, value)
            .then( ( { data } ) => {
                dispatch( Actions.modalUpdateQiwiWalletAction( { isOpen: false, id: null } ) )
                notification( data.message, 'backGround: green' )
                } )
            .catch( e => console.log(e))

    }
    return (
        <>
            { !value ? <Spinner /> :
           <div className={s.formContainer}>
               <h3 className={s.header}>Update Wallet {value.mark}</h3>
               <form className={s.form} onSubmit={submitUpdatedQiwiWallet}>
                   <div className={s.fieldsBody}>
                       <div className="input-field col s6">
                           <label htmlFor="user-name" className='active'> User name</label>
                           <input
                               defaultValue={value.mark}
                               onChange={valueHandler}
                               name="qiwiName"
                               id='qiwi-name'
                               type="text"
                               autoComplete="text"
                               required
                           />
                       </div>
                       <div className="input-field col s6">
                           <label htmlFor="qiwi-phone" className='active'>Phone</label>
                           <input
                               defaultValue={value.number}
                               onChange={valueHandler}
                               name="qiwiPhone"
                               id='qiwi-phone'
                               type="text"
                               autoComplete="text"
                               required
                           />
                       </div>
                       <div className="input-field col s6">
                           <label htmlFor="qiwi-token" className='active'>Token</label>
                           <input
                               defaultValue={value.token}
                               onChange={valueHandler}
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
                           <div>Update wallet</div>
                           <i className="material-icons">send</i>
                       </button>
                   </div>
               </form>
           </div>
            }
        </>
    )
}