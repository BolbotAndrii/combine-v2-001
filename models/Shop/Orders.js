const { model, Schema, Types } = require('mongoose')

const order = new Schema({
    id:         { type: Types.ObjectId },
    user:       { type: String, required: true},
    mark:       { type: String, required: true },
    date:       { type: Date, default: Date.now },
    sum:        { type: Number },
    cancel:     { type: Boolean, default: false },
    processed:  { type: Boolean, default: false },
    status:     { type: String, default: 'In process' },
    products:   [{ type: String }]
})

module.exports = model('orders', order )