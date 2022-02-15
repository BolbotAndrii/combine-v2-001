import React, { useState } from 'react'
import s from './CloudFlare.Create.Form.module.css'
import { createCFAccount } from "../../../../utils/api";
import {notification} from "../../../../utils/notification";

export const CloudFlareCreateForm = () => {

    const [value, setValue] = useState({})

    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        createCFAccount( value )
            .then( ( { data } ) => {
                notification(data.message, 'backGround: green')
            })
            .catch((error) => console.log(error))
        e.target.reset()
    }


    return (
        <div className={s.container}>
            <h2>Add new CF account</h2>
            <form onSubmit={submitHandler} className={s.formAdduser}>
                <div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="email">Email</label>
                            <input
                                value={value.name}
                                onChange={valueHandler}
                                name="cfEmail"
                                id='email'
                                type="email"
                                autoComplete="text"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="password">Password</label>
                            <input
                                value={value.name}
                                onChange={valueHandler}
                                name="cfPassword"
                                id='password'
                                type="password"
                                autoComplete="text"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="token">Token</label>
                            <input
                                value={value.name}
                                onChange={valueHandler}
                                name="cfToken"
                                id='token'
                                type="text"
                                autoComplete="text"
                                required
                            />
                        </div>
                    </div>

                </div>

                <div>
                    <button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}` } type="submit" name="action">
                        <div>Create account</div>
                        <i className="material-icons">create</i>
                    </button>
                </div>
            </form>
        </div>
    )
}