const User = require('../models/Users/Users')

const updateUserCoinWallet = async (req, res) => {
    try {

    } catch (e) {

    }
}

const getUserCoinFromWallet = async (req, res) => {
    try {

        const wallet = await User.findById({ _id: req.params.id } )
        if(wallet) {
            return res.status( 200 ).json( { coins: wallet.userCoins } )
        }
    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error !'} )
    }
}

module.exports = {
    updateUserCoinWallet,
    getUserCoinFromWallet
}