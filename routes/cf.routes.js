const { Router } = require('express')
const { createCFAcc, getCFAccounts, getCFAccount, deleteCFAccount, connectCFAccount } = require('../controllers/cf.controller')

const router = Router()


router.post(
    '/',
    createCFAcc
)

router.delete(
    '/:id',
    deleteCFAccount
)

router.get(
    '/',
    getCFAccounts
)

router.get(
    '/:id',
    getCFAccount
)

router.get(
    '/connect/:id',
    connectCFAccount
)



module.exports = router