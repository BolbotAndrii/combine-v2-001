const { Schema, model, Types} = require('mongoose')

const group = new Schema({
	groupId:     		{ type: Types.ObjectId },
	groupDate:   		{ type: Date, default: Date.now },
	groupName:   		{ type: String, required: true },
	groupAccess: 		{ type: Array, required: true },
	groupPagePerm:		{ type: Array, required: true}
})

module.exports = model('groups', group)