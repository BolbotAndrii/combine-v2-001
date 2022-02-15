const {Router} = require('express')
const router = Router()

const { Login } = require('../controllers/auth.controller')


// /api/auth/login
router.post(
	'/login',
	Login
)


module.exports = router

