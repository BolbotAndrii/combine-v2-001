const { Schema, model } = require('mongoose')

const Apps = new Schema({
	appName:        { type: String, required: true },
	appDate:        { type: Date, default: Date.now },
	appIds: 		{ type: String },
	appImg:         { type: String },
	description:    { type: String, required: true }
})


module.exports = model('Apps', Apps)