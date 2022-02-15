const User = require('../models/Users/Users')
const bcrypt = require('bcryptjs')
const axios = require("axios");
const FormData = require('form-data');

const getUsers = async ( req, res ) => {
	try {
		const users = await User.find()
		res.status( 200 ).json( users )
	} catch (err) {
		res.status( 500 ).json( { message: "Error", error: err } )
	}
}

const getUser = async ( req, res ) => {
	try {
		const user = await User.findById( req.params.id )

		return res.status( 200 ).json( user )
	} catch (err) {
		res.status( 500 ).json( { message: "Error", error: err } )
	}
}

const getUsersByOptionName = async ( req, res ) => {
	try {

		const filter = {
			userGroup: req.params.fv
		}
		const users = await User.find( filter  )
		return res.status( 200 ).json( users )
	} catch (err) {
		res.status( 500 ).json( { message: "Error", error: err } )
	}
}

const createUser = async ( req, res ) => {
	try {
		const { userEmail, userGroup, userMark, userName, userPassword, userCoins } = req.body

		const groupName = userGroup.toLowerCase()

		const candidate = await User.findOne( { userEmail } )

		if ( candidate ) {
			res.status( 400 ).json( { message: "Error! Email exists!" } )
		}

		if ( !userEmail && !userGroup && !userMark && !userName && !userPassword ) {
			res.status( 400 ).json( { message: "Not all fields are filled in" } )
		}

		const hashedPassword = await bcrypt.hash(userPassword, 12)

		const user = await new User( { userEmail, userGroup:groupName, userMark, userName, userPassword: hashedPassword, userCoins  } )

		if ( groupName === 'administrator' || groupName === 'buyer' ) {
			let data = new FormData()
				data.append('login', `${userEmail}`)
				data.append('new_password',`${userPassword}`)
				data.append('new_password_confirmation', `${userPassword}`)
				data.append('type', `${ groupName === 'administrator' ? 'ADMIN' : 'USER'}`)

				let config = {
					method: 'post',
					url: 'https://et-keitaro.space/admin_api/v1/users',
					headers: {
						'Api-Key': '91668992d11e15c8198c2bbbfe39a7a6',
						...data.getHeaders()
					},
					data : data
				}

				await user.save()

				axios(config)
					.then( function ( response) {
						if(response.data) {
							res.status( 201 ).json( { message: 'User created' } )
						}

					})
					.catch(function (error) {
						console.log(error)
					})


			} else {
			const createdUser = await user.save()

			if (createdUser) {
				res.status( 201 ).json( { message: 'User created' } )
			}
		}

	} catch ( err ) {
		res.status( 500 ).json( { message: "Error", error: err } )
	}
}

const updateUser = async ( req, res ) => {
	try {
		const filter = { _id: req.params.id }

		const { userName, userMark, userEmail, userPasswordUpd, userGroup, userCoins } = req.body

		if( userPasswordUpd ) {
			const hashedPassword = await bcrypt.hash(userPasswordUpd, 12)
				await User.findOneAndUpdate( filter, {
						userName, userMark, userEmail, userPassword: hashedPassword, userGroup, userCoins
					}, {
						new: true
					} )
			return res.status( 200 ).json( { message: 'User updated' } )

		} else {
			const candidate = await User.findOne( { _id: req.params.id } )
					await User.findOneAndUpdate( filter, {
							userName, userMark, userEmail, userPassword: candidate.userPassword, userGroup, userCoins
						}, {
							new: true
						} )
			return res.status( 200 ).json( { message: 'User updated' } )
		}


	} catch ( err ) {
		res.status( 500 ).json( { message: "Error", error: err } )
	}
}


const deleteUser = async ( req, res ) => {
	try {
		await User.findByIdAndDelete( req.params.id )
		res.status( 200 ).json( { message: 'User deleted' } )
	} catch (err) {
		res.status( 500 ).json( { message: "Error", error: err } )
	}
}




module.exports = { getUsers, createUser, getUser, deleteUser, updateUser, getUsersByOptionName }