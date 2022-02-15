const Pages = require('../models/Pages/Pages')


const getPagesParams = async ( req, res, next ) => {
    try {
        const pages = await Pages.find()

        return res.status(200).json( pages )

    }
    catch ( e ) {
        res.status( 500 ).json( { message: 'Eternal server error' } )
    }
}

module.exports = {getPagesParams}