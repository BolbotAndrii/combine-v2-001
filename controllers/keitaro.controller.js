const axios = require('axios')


const setFetchParams = ( urlReq ) => {
   return {
        url: `https://et-keitaro.space/admin_api/v1/${urlReq}`,
        headers: {
            'Api-Key': '91668992d11e15c8198c2bbbfe39a7a6',
            'Access-Control-Allow-Origin': '*'
        }
    }
}

// Campaings
const getCampaigns = async ( req, res, next ) => {
    try {
        const config = setFetchParams(`campaigns`)
        axios(config)
            .then(function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })


    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}


const getCampaign = async ( req, res ) => {
    try {
        const config = setFetchParams(`campaigns/${req.params.id}`)
        axios(config)
            .then(function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

const getCampaignsNames = async ( req, res ) => {
    try {
        const config = setFetchParams(`campaigns`)
        axios(config)
            .then(function ( response) {
                const campNames = []
                response.data.forEach( item => {
                    campNames.push({
                        id: item.id,
                        name: item.name
                    })
                })
               res.status( 200 ).json( campNames )
            })
            .catch(function (error) {
                res.status( 400 ).json( error )
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}


// Landings

const getLanding = ( req, res ) => {
    try {

    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

const getLandings = ( req, res ) => {
    try {
        const config = setFetchParams(`landing_pages`)
        axios(config)
            .then( function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch( function (error) {
                console.log(error)
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

// Offers

const getOffers = ( req, res ) => {
    try {
        const config = setFetchParams(`offers`)
        axios(config)
            .then( function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch( function (error) {
                console.log(error)
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

const getOffer = ( req, res ) => {
    try {
        const config = setFetchParams(`offers/${req.params.id}`)
        axios(config)
            .then( function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch( function (error) {
                console.log(error)
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

// Domains

const getDomains = ( req, res ) => {
    try {
        const config = setFetchParams(`domains`)
        axios(config)
            .then(function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}


const getDomain = ( req, res ) => {
    try {
        const config = setFetchParams(`domains/${req.params.id}`)
        axios(config)
            .then(function (response) {
                res.status( 200 ).json(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

const setNewCampaign = ( req, res )  => {
    try {
        const { campaignId, domainId } = req.body

        const data = JSON.stringify({
            "default_campaign_id": `${campaignId}`
        })

        const config = {
            method: 'put',
            url: `https://et-keitaro.space/admin_api/v1/domains/${domainId}`,
            headers: {
                'Api-Key': '91668992d11e15c8198c2bbbfe39a7a6',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            data : data
        }

        axios(config)
            .then(function (response) {
                res.status( 200 ).json( { message: 'Campaign successfully changed' } )
            })
            .catch(function (error) {
                console.log(error)
            });
    } catch ( e ) {
        res.status( 500 ).json( { message: 'Server error', error: e } )
    }
}

module.exports = {

    getCampaigns,
    getCampaign,
    getCampaignsNames,
    getDomains,
    getDomain,
    setNewCampaign,
    getLanding,
    getLandings,
    getOffers,
    getOffer
}