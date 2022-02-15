const { model, Schema } = require('mongoose')

const currencies = new Schema({
    name: { type: String },
    value: { type: Number   }
})

module.exports = model('currencies', currencies)