const CFAccount = require('../models/Cf/Cf')
const axios = require('axios')

const createCFAcc = async ( req, res ) => {
    try {
        // const { cf } = req.body

        const account = new CFAccount( req.body )
        const cfCreate = await account.save()
        // res.status(200).json( { message: 'Account created' } )
        if (!cfCreate) {
            res.status(500).json( { message: 'Create error' } )
        } else {
            res.status(200).json( { message: 'Account created' } )
        }

    } catch (e) {
        res.status(500).json( { message: 'Create error', error: e } )
    }
}

const deleteCFAccount = async ( req, res ) => {
    try {
        await CFAccount.findByIdAndDelete( req.params.id )
        res.status( 200 ).json( { message: 'Account was successfully deleted' } )
    } catch (e) {
        res.status(500).json( { message: 'Create error', error: e } )
    }
}

const getCFAccounts = async ( req, res ) => {
    try {
        const cfAccounts = await CFAccount.find()
        res.status( 200 ).json( cfAccounts )
    } catch (e) {
        res.status(500).json( { message: 'Create error', error: e } )
    }
}


const getCFAccount = async ( req, res ) => {
    try {
        const cfAccounts = await CFAccount.findOne( req.params.id )
        res.status( 200 ).json( cfAccounts )
    } catch (e) {
        res.status(500).json( { message: 'Create error', error: e } )
    }
}

const connectCFAccount = async ( req, res ) => {
    try {

        const cfAccounts = await CFAccount.findById( req.params.id )
        const config = {
            method: 'get',
            url: 'https://api.cloudflare.com/client/v4/zones/',
            headers: {
                'X-Auth-Email': `${cfAccounts.cfEmail}`,
                'X-Auth-Key': `${cfAccounts.cfToken}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                res.status( 200 ).json( response.data )
            })
            .catch(function (error) {
                console.log(error);
            });


    } catch (e) {
        res.status(500).json( { message: 'Connection error', error: e } )
    }
}



module.exports = { createCFAcc, getCFAccounts, getCFAccount, deleteCFAccount, connectCFAccount }