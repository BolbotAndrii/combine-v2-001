import React, { useState } from 'react'
import s from './App.AddForm.module.css'
import { createApplication } from '../../../../utils/api'

export const AddNewApp = () => {
	const [file, setFile] = useState(null)
	const [value, setValue] = useState({})

	const valueHandler = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

	const submitHandler = async (e) => {
		e.preventDefault()

		const dataForm = new FormData()

		dataForm.append('appImg', file)

		dataForm.append('appData', JSON.stringify(value))

		await createApplication(dataForm)
			.then( res => {
				if( res.status === 200 ) {
					window.M.toast({html: res.data.message, classes: 'backGround: green'})
				}
			})
			.catch( err => console.log( err ))


		e.target.reset()
	}



	return (
		<div className={s.container}>
			<h2>Add new application</h2>
			<form onSubmit={submitHandler} className={s.formAdduser}>
				<div>

					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="user-name">Application name</label>
							<input
								value={value.name}
								onChange={valueHandler}
								name="appName"
								id='user-name'
								type="text"
								autoComplete="text"
								required
							/>
						</div>
					</div>

					<div className="row">
						<div className="file-field input-field">
							<div className="btn">
								<span>File</span>
								<input
									type="file"
									name='appImg'
									onChange={ (e) => { setFile( e.target.files[0] )}}
								/>
							</div>
							<div className="file-path-wrapper">
								<input className="file-path validate" type="text"/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="app-ids">Allowed Id</label>
							<input
								value={value.name}
								onChange={valueHandler}
								name="appIds"
								id='app-ids'
								type="text"
								autoComplete="text"
								required
							/>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s12">
							<textarea
								id="description"
								className="materialize-textarea"
								onChange={valueHandler}
								value={value.name}
								name='appDesc'>
							</textarea>
							<label htmlFor="description">Description</label>
						</div>
					</div>

				</div>

				<div>
					<button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}` } type="submit" name="action">
						<div>Create app</div>
						<i className="material-icons">create</i>
					</button>
				</div>
			</form>
		</div>
	)
}