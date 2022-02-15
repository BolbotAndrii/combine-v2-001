const { Router } = require('express')
const { updateUserCoinWallet, getUserCoinFromWallet } = require('../controllers/coins.controller')
const router = Router()

router.get(
    '/:id',
    getUserCoinFromWallet
)

router.put(
    '/:id',
    updateUserCoinWallet
)


module.exports = router