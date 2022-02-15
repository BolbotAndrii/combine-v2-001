import React, {useEffect, useState} from 'react';

import s from "./Modal.Group.Edit.module.css";
import { useSelector } from "react-redux";
import { updateGroupsDataId } from "../../../../redux/Modals/Modal.selectors";
import { getUserGroup, updateUserGroup } from "../../../../utils/api";
import { notification } from '../../../../utils/notification'
import { CheckBox } from "../../../../utils/ui/checkbox";
import { Radio } from "../../../../utils/ui/radio";

export const EditModalGroup = () => {
    const [group, setGroup] = useState({})

    const groupId = useSelector( updateGroupsDataId )

    const [value, setValue] = useState({})



    const valueHandler = ( e ) => {
        setValue({...value, [ e.target.name ]: e.target.value } )
    }

    const submitHandler = async ( e ) => {
        e.preventDefault()

        await updateUserGroup(value)
            .then((data) => {
                if (data.status === 201) {
                    notification(data.data.message, 'backGround: green')
                    console.log(data)
                }
            })
            .catch((error) => {
                notification('An error occurred while saving', 'backGround: red')
            })
    }

    useEffect(() => {
        getUserGroup(groupId)
            .then( data => {
                setGroup(data.data)
                console.log(data.data)
            })
            .catch(e => {
                console.error(e)
            })

    }, [groupId])

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <div className={s.formHeader}>
                <h4>Change group data</h4>
            </div>
            <div className="input-field">
                <label htmlFor="user-pass" className='active'>Group name</label>
                <input
                    defaultValue={group.groupName}
                    onChange={valueHandler}
                    name="userPassword"
                    id='user-pasks'
                    type="text"
                    required
                />
            </div>
            <div className={s.formBody}>

                <div className={s.formBodyBlock}>
                    <div className={s.bodyBlockHeader}>
                        Allowed pages
                    </div>
                   <div className={s.bodyBlockContainer}>

                       <CheckBox id='registrator' name='registrator' handler='valueHandler' label='Registrator' check={group.reg} />

                       <CheckBox id='cloudflare' name='groupCloud' handler='valueHandler' label='Cloudflare' check={group.cloud} />

                       <CheckBox id='keitaro' name='groupKeitaro' handler='valueHandler' label='Keitaro' check={group.keitaro} />

                       <CheckBox id='qiwi' name='groupQiwi' handler='valueHandler' label='Qiwi' check={group.qiwi} />

                       <CheckBox id='users' name='groupUsers' handler='valueHandler' label='Users' check={group.users} />

                       <CheckBox id='apps' name='groupApps' handler='valueHandler' label='Applications' check={group.apps} />

                   </div>

                </div>
                <div className={s.formBodyBlock}>
                    <div className={s.bodyBlockHeader}>
                        Page permissions
                    </div>
                    <div className={s.bodyBlockContainer}>
                        <div className={s.permissionsContainer}>
                            <p className={s.premHeader}>
                                Registrator
                            </p>
                            <div className={s.permCont}>
                                <Radio id='registratorR' name='registrRadio' elemClass='with-gap' handler={valueHandler} label='Read only' check={group.regPerm} />
                                <Radio id='registratorC' name='registrRadio' elemClass='with-gap' handler={valueHandler} label='Change' check={group.regPerm} />
                            </div>
                        </div>
                        <div className={s.permissionsContainer}>
                            <p className={s.premHeader}>
                                Cloud Flare
                            </p>
                            <div className={s.permCont}>
                                <Radio id='cloudR' name='cloudRadio' elemClass='with-gap' handler={valueHandler} label='Read only' check={group.cloudPerm} />
                                <Radio id='cloudC' name='cloudRadio' elemClass='with-gap' handler={valueHandler} label='Change' check={group.cloudPerm} />
                            </div>
                        </div>

                        <div className={s.permissionsContainer}>
                            <p className={s.premHeader}>
                                Keitaro
                            </p>
                            <div className={s.permCont}>

                                <p>
                                    <input
                                        type="radio"
                                        id="keitaroR"
                                        name='keitaroRadio'
                                        className="with-gap"
                                        defaultChecked
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="keitaroR">Read only</label>
                                </p>
                                <p>
                                    <input
                                        type="radio"
                                        id="keitaroC"
                                        name='keitaroRadio'
                                        className="with-gap"
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="keitaroC">Change</label>
                                </p>
                            </div>
                        </div>

                        <div className={s.permissionsContainer}>
                            <p className={s.premHeader}>
                                Qiwi
                            </p>
                            <div className={s.permCont}>
                                <p>
                                    <input
                                        type="radio"
                                        id="qiwiR"
                                        name='qiwiRadio'
                                        className="with-gap"
                                        defaultChecked
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="qiwiR">Read only</label>
                                </p>
                                <p>
                                    <input
                                        type="radio"
                                        id="qiwiC"
                                        name='qiwiRadio'
                                        className="with-gap"
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="qiwiC">Change</label>
                                </p>
                            </div>
                        </div>

                        <div className={s.permissionsContainer}>
                            <p className={s.premHeader}>
                                Users
                            </p>
                            <div className={s.permCont}>
                                <p>
                                    <input
                                        type="radio"
                                        id="userR"
                                        name='userRadio'
                                        className="with-gap"
                                        defaultChecked
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="userR">Read only</label>
                                </p>
                                <p>
                                    <input
                                        type="radio"
                                        id="userC"
                                        name='userRadio'
                                        className="with-gap"
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="userC">Change</label>
                                </p>
                            </div>
                        </div>

                        <div className={s.permissionsContainer}>
                            <p className={s.premHeader}>
                                Applications
                            </p>
                            <div className={s.permCont}>
                                <p>
                                    <input
                                        type="radio"
                                        id="appR"
                                        name='appsRadioPerm'
                                        className="with-gap"
                                        defaultChecked
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="appR">Read only</label>
                                </p>
                                <p>
                                    <input
                                        type="radio"
                                        id="appC"
                                        name='appsRadioPerm'
                                        className="with-gap"
                                        onChange={valueHandler}
                                    />
                                    <label htmlFor="appC">Change</label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.modalBottom}>
                <button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}`} type="submit" name="action">
                    <div>Change</div>
                    <i className="material-icons">send</i>
                </button>

                <button className={`btn waves-effect waves-light btn red lighten-1 btn-large red ${s.backBtn}`} type="reset" name="action">
                    <div>Back</div>
                    <i className="material-icons">backspace</i>
                </button>
            </div>
        </form>
    )
}
