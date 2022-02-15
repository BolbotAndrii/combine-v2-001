const { Router } = require('express')
const { createApp, getApps, getApp, updateApp, deleteApp } = require('../controllers/apps.controller')
const { upload } = require('../middlewares/multer')

const router = Router()



// api/apps/ -- create new app


router.post(
	'/',
	upload,
	createApp
)

router.get(
	'/',
	getApps
)

router.get(
	'/:id',
	getApp
)

router.put(
	'/:id',
	updateApp
)

router.delete(
	'/:id',
	deleteApp
)



module.exports = router