const {Router} = require('express')
const { getPagesParams } = require('../controllers/pages.controller')
const router = Router()


router.get(
    '/',
    getPagesParams
)

module.exports = router