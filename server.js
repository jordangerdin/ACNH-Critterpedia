let express = require('express')
let routes = require('./routes/routes')

// App configuration
let app = express()

// Start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})