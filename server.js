let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

// App configuration
let app = express()

app.use(express.static(path.join(__dirname, 'acnh-client', 'dist')))

app.use('/', routes)

// Start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})