const { Schema, model, Types } = require('mongoose')

const wallets = new Schema( {
    id:         { type: Types.ObjectId },
    mark:       { type: String, required: true },
    user:       { type: String, required: true },
    lead:       { type: String,  default: '' },
    number:     { type: String, required: true },
    token:      { type: String, required: true },

} )

module.exports = model('wallets', wallets)