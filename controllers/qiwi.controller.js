const Wallet = require('../models/Qiwi/Qiwi')
const axios = require("axios");

const getWalletsParams = ( number, token ) => {
    return {
        url: `https://edge.qiwi.com/funding-sources/v2/persons/${number}/accounts`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        }
    }
}

const getQiwiWallets = async ( req, res ) => {
    try {
        const wallets = await Wallet.find()

        return res.status(200).json(wallets)

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error:e } )
    }
}

const getQiwiWallet = async ( req, res ) => {
    try {

        // const num = req.params.id
        const candidate = await Wallet.findOne( { number: req.params.id } )

        axios( getWalletsParams( candidate.number, candidate.token ) )
            .then((response
            ) => {
                res.status(200).json({ balance: response.data.accounts[0].balance })
            })
            .catch(error => {
                console.log(error)

            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error:e } )
    }
}

const getQiwiWalletfromDB = async ( req, res ) => {
    try {

        // const num = req.params.id
        const wallet = await Wallet.findOne( { _id: req.params.id } )

        res.status(200).json(wallet)

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error:e } )
    }
}

const getQiwiWalletsByMark = async ( req, res ) => {
    try {

        // const num = req.params.id
        const wallets = await Wallet.find( { user: req.params.mark } )

      return  res.status(200).json(wallets)

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error:e } )
    }
}

const getQiwiWalletsByLeadMark = async ( req, res ) => {
    try {
        const wallets = await Wallet.find( { lead: req.params.id } )
        return  res.status(200).json(wallets)

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error:e } )
    }
}

const createQiwiWallet = async ( req, res ) => {
    try {

        const { qiwiName, qiwiUser, qiwiPhone, qiwiToken, qiwiLeads } = req.body

        const wallet = await new Wallet({
            mark: qiwiName,
            user: qiwiUser,
            lead: qiwiLeads,
            number: qiwiPhone,
            token: qiwiToken }
        )

        const createdWallet = await wallet.save()

        if( createdWallet ) {
           return res.status( 200 ).json( { message: 'Wallet was successfully added' } )
        }

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error: e } )
    }
}

const updateQiwiWallet = async ( req, res ) => {
    try {

        const { qiwiName, qiwiPhone, qiwiToken, qiwiLeads } = req.body

        const updatedWallet = await Wallet.findByIdAndUpdate( req.params.id, {
            mark: qiwiName, number: qiwiPhone, token: qiwiToken, lead: qiwiLeads
        })

        if( updatedWallet ) {
            res.status( 200 ).json( { message: 'Qiwi wallet updated!' } )
        }

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error: e } )
    }
}

const deleteQiwiWallet = async ( req, res ) => {
    try {
        const deletedWallet = await Wallet.findByIdAndDelete( req.params.id )

        if ( deletedWallet ) {
            res.status( 200 ).json( { message: 'Qiwi wallet deleted!' } )
        }
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error: e } )
    }
}

const transferQiwiWalletCash = async ( req, res ) => {
    try {
        const genId = Math.floor(new Date().getTime() / 10)



        const { qiwiPhone, qiwiAmount, qiwiComment } = req.body

        const data = JSON.stringify({
            "id": `${genId}`,
            "sum": {
                "amount": qiwiAmount,
                "currency": "643"
            },
            "paymentMethod": {
                "type": "Account",
                "accountId": "643"
            },
            "comment": `${qiwiComment}`,
            "fields": {
                "account": `${qiwiPhone}`
            }
        })

        const config = {
            method: 'post',
            url: 'https://edge.qiwi.com/sinap/api/v2/terms/99/payments',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ req.params.id }`,
                'Access-Control-Allow-Origin': '*'
            },
            data : data
        }
        // console.log(config)

        axios(config)
            .then(function (response) {
                res.status( 200 ).json( { message: "Transfer was successfully", dataTrans: response.data } )
            })
            .catch(function (error) {
                console.log(error)
            })

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server Error', error: e } )
    }
}



module.exports = {
    getQiwiWallets,
    getQiwiWallet,
    createQiwiWallet,
    updateQiwiWallet,
    deleteQiwiWallet,
    transferQiwiWalletCash,
    getQiwiWalletfromDB,
    getQiwiWalletsByMark,
    getQiwiWalletsByLeadMark
}