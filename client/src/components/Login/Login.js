import React, {useContext, useState} from 'react'
import s from './Login.module.css'
import { userLogin } from '../../utils/api'
import { AuthContext } from "../../context/Auth.Context"
import { notification } from "../../utils/notification"

export const LoginForm = () => {
	const [value, setValue] = useState({})

	const {login} = useContext( AuthContext )

	const valueHandler = ( e ) => {
		setValue({ ...value, [e.target.name]: e.target.value } )
	}

	const submitHandler = (e) => {
		e.preventDefault()
		userLogin( value )
			.then( ( { data } ) => {
				login( data.token, data.userId, data.mark, data.name, data.group  )
			})
			.catch( (error) => {
				notification( error.response.data.message, 'backGround: red' )
			})
	}

	return(
		<div className={ s.container }>
			<h4 className={ s.header }>Log In</h4>
			<form className={ s.form } onSubmit={ submitHandler } autoComplete="off">

				<div className={ `input-field ${ s.inputContainer }` }>
					<i className={`material-icons tiny prefix ${ s.iconColor }`}>account_circle</i>
					<input
						id="login"
						type="text"
						name="userEmail"
						defaultValue={ value.userEmail }
						onChange={ valueHandler }
					/>
					<label htmlFor="login">Login</label>
				</div>

				<div className={ `input-field ${ s.inputContainer }` }>
					<i className={`material-icons prefix ${ s.iconColor }`}>lock</i>
					<input
						id="password"
						type="password"
						name='userPassword'
						defaultValue={ value.userPassword }
						onChange={ valueHandler }
						autoComplete="off"
					/>
					<label htmlFor="password">Password</label>
				</div>

				<div className={ `input-field col s6 ${ s.btns }` }>
					<button type='submit' className="waves-effect waves-light btn">Login</button>
				</div>
			</form>
		</div>
	)

}