const {Router} = require('express')
const router = Router()
const {getAllQiwiLogs, getQiwiLog, postQiwiLog } = require('../controllers/logs.controller')

// Qiwi logs
router.get(
    '/qiwi',
    getAllQiwiLogs
)

router.get(
    '/qiwi/:id',
    getQiwiLog
)


router.post(
    '/qiwi',
    postQiwiLog
)


module.exports = router