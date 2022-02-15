const { Schema, model, Types} = require('mongoose')

const CFAccount = new Schema({
    cfId:           { type: Types.ObjectId },
    cfEmail:        { type: String, required: true },
    cfPassword:     { type: String, required: true },
    cfToken:        { type: String, required: true }
})

module.exports = model('cf_accounts', CFAccount)
