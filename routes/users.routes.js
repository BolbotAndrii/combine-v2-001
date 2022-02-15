const { Router } = require('express')
const {
		getUsers,
		createUser,
		getUser,
		updateUser,
		deleteUser,
	getUsersByOptionName
} = require('../controllers/users.controller')


const router = Router()

// api/users/ -- get all users
router.get(
	'/',
	getUsers
)

// api/users/ -- add user
router.post(
	'/create',
	createUser
)

// api/users/ -- get user by option
router.get(
	'/mark/:fv',
	getUsersByOptionName
)

// api/users/ -- get user by id
router.get(
	'/:id',
	getUser
)


// api/users/ -- update user by id
router.put(
	'/:id',
	updateUser
)

// api/users/ -- delete user by id
router.delete(
	'/:id',
	deleteUser
)


module.exports = router
