const { Schema, model, Types } = require('mongoose')

const page = new Schema( {
    id: { type: Types.ObjectId },
    name: { type: String, required: true, unique: true},
    componentPath: { type: String, required: true, unique: true},
    exact: { type: Boolean, required: true },
    groups:  { type: Array, required: true, unique: true},
} )

module.exports = model('pages', page )