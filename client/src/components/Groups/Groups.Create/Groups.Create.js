import React, { useState } from 'react'
import s from './Groups.module.css'
import { createUserGroup } from "../../../utils/api";
import {notification} from "../../../utils/notification";

export const GroupCreate = () => {
	const [value, setValue] = useState({})



	const valueHandler = ( e ) => {
		setValue({...value, [ e.target.name ]: e.target.value } )
	}

	const submitHandler = async ( e ) => {
		e.preventDefault()

		await createUserGroup( value )
			.then( ( { data } ) => {
				notification(data.message, 'backGround: green')
			} )
			.catch( ( error ) => {
				notification('An error occurred while saving', 'backGround: red')
			})
		e.target.reset()
	}


	return (
		<div className={s.container}>
			<h2>Create group</h2>
			<form onSubmit={submitHandler}>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="group">Group name</label>
							<input
								defaultValue=''
								value={value.groupName}
								onChange={ valueHandler }
								name="groupName"
								id='group'
								type="text"
								autoComplete="text"
								required
							/>
						</div>
					</div>

				<div className={s.formContainer}>
					<h5 className={`white-text ${s.formContHeader}`}>Allowed pages</h5>

					<div>
						<p>
							<input
								type="checkbox"
								id="registrator"
								name='groupReg'
								onChange={valueHandler}
								className='reset-checkbox'
							/>
							<label htmlFor="registrator">Registrator</label>
						</p>
						<p>
							<input
								type="checkbox"
								id="cloudflare"
								name='groupCloud'
								onChange={valueHandler}
							/>
							<label htmlFor="cloudflare">Cloudflare</label>
						</p>
						<p>
							<input
								type="checkbox"
								id="keitaro"
								name='groupKeitaro'
								onChange={valueHandler}
							/>
							<label htmlFor="keitaro">Keitaro</label>
						</p>
						<p>
							<input
								type="checkbox"
								id="qiwi"
								name='groupQiwi'
								onChange={valueHandler}
							/>
							<label htmlFor="qiwi">Qiwi</label>
						</p>
						<p>
							<input
								type="checkbox"
								id="users"
								name='groupUsers'
								onChange={valueHandler}
							/>
							<label htmlFor="users">Users</label>
						</p>
						<p>
							<input
								type="checkbox"
								id="shop"
								name='groupShop'
								onChange={valueHandler}
							/>
							<label htmlFor="shop">Shop</label>
						</p>
					</div>
				</div>

				<div className={s.formContainer}>
					<h5 className={`white-text ${s.formContHeader}`}>Page permissions</h5>

					<div className={s.permissionsContainer}>
						<p className={s.premHeader}>
							Registrator
						</p>
						<div className={s.permCont}>
							<p>
								<input
									type="radio"
									id="registratorR"
									name='registrRadio'
									className="with-gap"
									defaultChecked
									onChange={valueHandler}
								/>
								<label htmlFor="registratorR">Read only</label>
							</p>
							<p>
								<input
									type="radio"
									id="registratorC"
									name='registrRadio'
									className="with-gap"
									onChange={valueHandler}
								/>
								<label htmlFor="registratorC">Change</label>
							</p>
						</div>
					</div>

					<div className={s.permissionsContainer}>
						<p className={s.premHeader}>
							Cloud Flare
						</p>
						<div className={s.permCont}>
							<p>
								<input
									type="radio"
									id="cloudR"
									name='cloudRadio'
									className="with-gap"
									defaultChecked
									onChange={valueHandler}
								/>
								<label htmlFor="cloudR">Read only</label>
							</p>
							<p>
								<input
									type="radio"
									id="cloudC"
									name='cloudRadio'
									className="with-gap"
									onChange={valueHandler}
								/>
								<label htmlFor="cloudC">Change</label>
							</p>
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
							Shop
						</p>
						<div className={s.permCont}>
							<p>
								<input
									type="radio"
									id="shopR"
									name='shopRadioPerm'
									className="with-gap"
									defaultChecked
									onChange={valueHandler}
								/>
								<label htmlFor="shopR">Read only</label>
							</p>
							<p>
								<input
									type="radio"
									id="shopC"
									name='shopRadioPerm'
									className="with-gap"
									onChange={valueHandler}
								/>
								<label htmlFor="shopC">Change</label>
							</p>
						</div>
					</div>
				</div>


					<div className={ `input-field col s6 ${s.btns}` }>
						<button type='submit' className={`waves-effect waves-light btn ${s.sendBtn}`}  name="action">
							<span>Create group</span>
							<i className="material-icons">create</i>
						</button>
					</div>
			</form>
		</div>
	)
}
