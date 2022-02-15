const { Router } = require('express')
const {
    getCampaigns,
    getCampaign,
    getCampaignsNames,
    getDomains,
    getDomain,
    setNewCampaign,
    getLandings,
    getLanding,
    getOffers,
    getOffer
} = require('../controllers/keitaro.controller')
const router = Router()

// Campaings

router.get(
    '/campaigns',
    getCampaigns
)

router.get(
    '/campaigns/names',
    getCampaignsNames
)

router.get(
    '/campaigns/:id',
    getCampaign
)


// Landings

router.get(
    '/landings',
    getLandings
)

router.get(
    '/landings/:id',
    getLanding
)

// Offers


router.get(
    '/offers',
    getOffers
)

router.get(
    '/offers/:id',
    getOffer
)

// Domains

router.get(
    '/domains',
    getDomains
)

router.get(
    '/domains/:id',
    getDomain
)

router.put(
    '/domains',
    setNewCampaign
)

module.exports = router