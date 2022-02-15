const { model, Schema, Types } = require('mongoose')

const QiwiLogModels = new Schema( {
    id:         { type: Types.ObjectId },
    from:       { type: String },
    to:         { type: String },
    amount:     { type: Number },
    comment :   { type: String },
    time:       { type: Date, default: Date.now }
})

// Sets the userDate parameter equal to the current time
QiwiLogModels.pre('save', function(next){
    let now = new Date()
    this.time = now
    next()
})

module.exports = model('qiwi_logs', QiwiLogModels )