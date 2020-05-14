let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

//this will configure the app
let app = express()

app.use(express.static(path.join(__dirname, 'basketball-roster-client', 'dist')))

app.use(bodyParser.json())

app.use('/api', api_routes)

// For when route not found, these are the error handlers
app.use(function(req, res, next) {
    res.status(404).send('Not Found')
})

//anytime there are server errors, these are the error handlers
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

//This will start the server at the 3000 port
let server = app.listen(process.env.Port || 3000, function() {
    console.log('Express server running on port', server.address().port)
})