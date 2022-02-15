const { model, Types, Schema } = require('mongoose')

const basket = new Schema( {
    user:       { type: Types.ObjectId },
    date:       { type: Date, default: Date.now },
    products:   [String]
} )

module.exports = model('Baskets', basket )