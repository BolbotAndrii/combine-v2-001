const {Router} = require('express')
const { getCurrency } = require('../controllers/currency.controller')

const router = Router()

router.get(
    '/',
    getCurrency
)

module.exports = router