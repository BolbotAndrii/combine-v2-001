const QiwiLog = require('../models/Logs/Qiwi.Logs')

const getAllQiwiLogs = async ( req, res ) => {
    try {
        const qiwiLogs = await QiwiLog.find()
        return req.status( 200 ).json( qiwiLogs )
    }
    catch (e) {
        return res.status( 500 ).json( { message: 'Server error!'} )
    }
}

const getQiwiLog = async ( req, res ) => {
    try {
        const qiwiLog = await QiwiLog.findById( req.params.id )
        return req.status( 200 ).json( qiwiLog )
    }
    catch (e) {
        return res.status( 500 ).json( { message: 'Server error!'} )
    }
}

const postQiwiLog = async ( req, res ) => {
    try {

        const { from, to } = req.body


        const qiwiLog = await new QiwiLog({
            from,
            to: to.qiwiPhone,
            amount: to.qiwiAmount,
            comment: to. qiwiComment
        })
        qiwiLog.save()
        console.log(qiwiLog)

        console.log(qiwiLog)
    }
    catch (e) {
        return res.status( 500 ).json( { message: 'Server error!'} )
    }
}

module.exports = {
    getAllQiwiLogs,
    getQiwiLog,
    postQiwiLog
}