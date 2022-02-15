const {Router} = require('express')
const {
    getQiwiWallets,
    getQiwiWallet,
    createQiwiWallet,
    updateQiwiWallet,
    deleteQiwiWallet,
    transferQiwiWalletCash,
    getQiwiWalletfromDB,
    getQiwiWalletsByMark,
    getQiwiWalletsByLeadMark
} = require('../controllers/qiwi.controller')

const router = Router()

// Wallets

//get all wallets
router.get(
    '/wallets',
    getQiwiWallets
)

//get all wallets by mark
router.get(
    '/wallets/mark/:mark',
    getQiwiWalletsByMark
)

//get all wallets by group
router.get(
    '/wallets/lead-mark/:id',
    getQiwiWalletsByLeadMark
)

//get wallet by id
router.get(
    '/wallets/:id',
    getQiwiWallet
)

//get wallet by id from db
router.get(
    '/wallets/db/:id',
    getQiwiWalletfromDB
)

//create wallet
router.post(
    '/wallets',
    createQiwiWallet
)

//update wallet by id
router.put(
    '/wallets/:id',
    updateQiwiWallet
)

//delete wallet by id
router.delete(
    '/wallets/:id',
    deleteQiwiWallet
)

//transfer cash to another qiwi wallet
router.post(
    '/wallets/:id',
    transferQiwiWalletCash
)




// Cards

module.exports = router