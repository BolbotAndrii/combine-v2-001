const Apps = require('../models/Apps/Apps')


const createApp = async ( req, res, next ) => {
	try {

		const appDataBody = JSON.parse( JSON.parse( JSON.stringify( req.body ) ).appData)

		const app = new Apps({
			appName:  		appDataBody.appName,
			appIds: 		appDataBody.appIds,
			appImg: 		'/uploads/'+req.file.filename,
			description: 	appDataBody.appDesc
		})

		const resultApp = await app.save()
		if(resultApp) {
			res.status( 200 ).json( { message: 'Application created' } )
		} else {
			res.status( 400 ).json ( { message: 'Application in\'t created' } )
		}


	} catch (e) {
		res.status( 500 ).json ( { message: 'Server error' } )
	}
}

const getApps = async ( req, res ) => {
	try {
		const apps = await Apps.find()

		res.status( 200 ).json(apps)

	} catch ( e ) {
		res.status( 500 ).json( { message: 'Server error' } )
	}
}

const getApp = async ( req, res ) => {
	try {
		const app = await Apps.findById(req.params.id)

		res.status( 200 ).json(app)

	} catch ( e ) {
		res.status( 500 ).json( { message: 'Server error' } )
	}
}

const deleteApp = async ( req, res ) => {

}

const updateApp = async ( req, res ) => {

}


module.exports = { createApp, getApps, getApp, deleteApp, updateApp }
