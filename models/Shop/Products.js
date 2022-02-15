const { model, Schema, Types } = require('mongoose')

const product = new Schema({
    id:         { type: Types.ObjectId },
    title:      { type: String },
    img:        { type: String },
    price:      { type: Number, default: 0 },
    count:      { type: Number, default: 0 },
    created:    { type: Date, default: Date.now }
})

module.exports = model('products', product)