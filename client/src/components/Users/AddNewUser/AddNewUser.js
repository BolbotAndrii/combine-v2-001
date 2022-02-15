import React, { useState, useEffect } from 'react'
import { createUser, getUserGroups } from '../../../utils/api'
import s from '../Users.module.css'
import {notification} from "../../../utils/notification";


export const AddNewUser = () => {
	const [uGroups, setUGroups] = useState(null)
	const [value, setValue] = useState({})

	const valueUserHandler = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}


	useEffect(() => {
		const elems = document.getElementById("user-group");
		window.M.FormSelect.init(elems);
	}, [uGroups]);

	useEffect( () => {
		getUserGroups()
			.then( data => setUGroups( data.data ) )
			.catch( error => console.error( error ) )
	}, [])


	const submitUserHandler = async (e) => {
		e.preventDefault()
			await createUser(value)
				.then( ( { data } ) => {
					notification(data.message, 'backGround: green')
				} )
				.catch( ( error ) => {
					notification('An error occurred while saving', 'backGround: red' )
				})
		e.target.reset()
	}


	return (
		<div className={s.container}>
			<h2>Create new user</h2>
			<form onSubmit={ submitUserHandler } className={s.formAdduser} autoComplete="off">
					<div>
						<div className="row">
							<div className="input-field col s12">
								<label htmlFor="user-name">User name</label>
								<input
									value={value.name}
									onChange={valueUserHandler}
									name="userName"
									id='user-name'
									type="text"
									required
									autoComplete="off"
									/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<label htmlFor="user-mark">User mark</label>
								<input
									value={value.mark}
									onChange={valueUserHandler}
									name="userMark"
									id='user-mark'
									type="text"
									required
									/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<label htmlFor="user-email">Email address</label>
								<input
									value={value.email}
									onChange={valueUserHandler}
									name="userEmail"
									id='user-email'
									type="email"
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<label htmlFor="user-pass">Password</label>
								<input
									value={value.password}
									onChange={valueUserHandler}
									name="userPassword"
									id='user-pass'
									type="password"
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<label htmlFor="user-coins">Coins</label>
								<input
									value={value.coins}
									onChange={valueUserHandler}
									name="userCoins"
									id='user-coins'
									type="text"
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<select
									name="userGroup"
									id="user-group"
									onChange={valueUserHandler}
									required
									defaultValue="defaultGroup"
								>
									<option key='defaultGroup' value="defaultGroup" disabled >Choose user group</option>
									{ uGroups && uGroups.map( item =>
										<option
											key={item._id}
											value={item.groupName}
										>{item.groupName}</option>
									) }

								</select>
								<label>Select group</label>
							</div>
						</div>
					</div>

					<div>
						<button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}` } type="submit" name="action">
							<div>Create user</div>
							<i className="material-icons">send</i>
						</button>
					</div>
			</form>
		</div>

)
}