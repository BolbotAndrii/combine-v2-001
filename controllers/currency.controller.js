const Currency = require('../models/Currency/Currency')

const getCurrency = async ( req, res ) => {
    try {
        const curr = await Currency.find()
       return res.status(200).json({curr})
    } catch (e) {
       res.status( 500 ).json({message: 'Server Error'})
    }
}

module.exports = {
    getCurrency
}