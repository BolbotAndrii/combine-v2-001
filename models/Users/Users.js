const { Schema, model, Types } = require('mongoose')

const user =  new Schema({
	userDate:      	{ type: Date, default: Date.now },
	userName:      	{ type: String, required: true },
	userMark:      	{ type: String, required: true, unique: true },
	userEmail:     	{ type: String, required: true, unique: true },
	userPassword:  	{ type: String, required: true },
	userGroup:     	{ type: String, default: 'user' },
	userCoins: 		{ type: Number, default: 0 }
})


module.exports = model('Users', user )
