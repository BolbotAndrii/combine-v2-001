const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path  = require('path')
// init app
const app = express()


// init port
const PORT = config.get('port') || 6000


// set json
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

// // init static folder
//
app.use( express.static('./') )


// middlewares
// users
app.use('/api/auth', require('./routes/auth.routes'))

app.use('/api/users', require('./routes/users.routes'))
app.use('/api/groups', require('./routes/groups.routes'))

// applications
app.use('/api/apps', require('./routes/apps.routes'))

// cloud flare
app.use('/api/cf', require('./routes/cf.routes'))

// keitaro
app.use('/api/keitaro', require('./routes/keitaro.routes'))

// qiwi
app.use('/api/qiwi', require('./routes/qiwi.routes'))

// pages
app.use('/api/pages', require('./routes/pages.routes'))

// logs
app.use('/api/logs', require('./routes/logs.routes'))

// currency
app.use('/api/currency', require('./routes/currency.routes'))

// coins
app.use('/api/coins', require('./routes/coins.routes'))


// product
app.use('/api/shop', require('./routes/shop.routes'))


if ( process.env.NODE_ENV === 'production' ) {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile( path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen( PORT, () => console.log(`Started at port: ${PORT}`) )

    } catch (err) {
        console.log('Server Error', err.message)
        process.exit(1)
    }
}

start()

