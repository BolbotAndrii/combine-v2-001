import React, {  useEffect, useState } from 'react'
import s from './Modal.User.Edit.module.css'
import { getUserById, updateUser, getUserGroups } from '../../../../utils/api'
import {useDispatch, useSelector} from 'react-redux'
import { updateUserDataId } from '../../../../redux/Modals/Modal.selectors'
import {notification} from "../../../../utils/notification"
import * as Actions from "../../../../redux/Modals/Modals.action"
import {Spinner} from "../../../../common/LocalLoader/Loader"


export const ModalEdit = () => {
	const [uGroups, setUGroups] = useState(null)
	const userId = useSelector( updateUserDataId )
	const [value, setValue] = useState(null)
	const dispatch = useDispatch()


	const valueHandler = ( e ) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}


	useEffect(() => {
		const elems = document.getElementById("user-group");
		window.M.FormSelect.init(elems);

	}, [uGroups])


	useEffect( () => {

		getUserById( userId )
			.then( data => setValue( data.data ) )
			.catch( error => console.error( error ) )

		getUserGroups()
			.then( data => setUGroups( data.data ) )
			.catch( error => console.error( error ) )

	}, [userId] )


	const updateDataUser = ( e ) => {
		e.preventDefault()
		updateUser(value).then( ( data) => {
			if ( data.status === 200 ) {
				dispatch( Actions.modalEditUserAction( { isOpen: false, id: null } ) )
				notification(data.data.message,'backGround: green' )
			}
		})
	}
	console.log(value)
	return (
		<>
		{
			!uGroups || !value ? <Spinner /> :

					<>
						<h5 className={s.header}>Change user data {value.userName}</h5>

						<form className={s.form} onSubmit={updateDataUser}>
							<div>
								<div className={`row ${s.formInput}`}>
									<div className="input-field col s6">
										<label htmlFor="user-name" className='active'> User name</label>
										<input
											defaultValue={value.userName}
											onChange={valueHandler}
											name="userName"
											id='user-name'
											type="text"
											required
										/>
									</div>
									<div className="input-field col s6">
										<label htmlFor="user-mark" className='active'>User mark</label>
										<input
											defaultValue={value.userMark}
											onChange={valueHandler}
											name="userMark"
											id='user-mark'
											type="text"
											required
										/>
									</div>
								</div>

								<div className={`row ${s.formInput}`}>
									<div className="input-field col s6">
										<label htmlFor="user-email" className='active'>Email address</label>
										<input
											defaultValue={value.userEmail}
											onChange={valueHandler}
											name="userEmail"
											id='user-email'
											type="email"
											required
										/>
									</div>
									<div className="input-field col s6">
										<label htmlFor="user-pass" className='active'>Password</label>
										<input
											defaultValue={value.userPassword}
											onChange={valueHandler}
											name="userPasswordUpd"
											id='user-pass'
											type="password"
											required
										/>
									</div>
								</div>
								<div className={`row ${s.formInput}`}>
									<div className="input-field col s6">
										<label htmlFor="user-coins" className='active'>Coins</label>
										<input
											defaultValue={value.userCoins}
											onChange={valueHandler}
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
											required
											onChange={valueHandler}
											defaultValue={value.userGroup}
										>
											<option value={value.userGroup} disabled>Choose user group</option>
											{uGroups.map(item =>
												<option
													key={item._id}
													name={item.groupName}
													value={item.groupName}
												>{item.groupName}</option>
											)}
										</select>
										<label>Select group</label>
									</div>
								</div>

							</div>
							<div className={s.modalBottom}>
								<button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}`} type="submit" name="action">
									<div>Change</div>
									<i className="material-icons">send</i>
								</button>
							</div>
						</form>
					</>

		}

		</>
	)

}