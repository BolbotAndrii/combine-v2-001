const { Router } = require('express')
const { getGroup, getGroups, createGroup, deleteGroup, updateGroup, getGroupByName } = require('../controllers/groups.controller')

const router = Router()

router.get(
	'/:id',
	getGroup
)

router.get(
	'/',
	getGroups
)

router.get(
	'/name/:name',
	getGroupByName
)

router.post(
	'/',
	createGroup
)

router.delete(
	'/:id',
	deleteGroup
)

router.put(
	'/:id',
	updateGroup
)

module.exports = router