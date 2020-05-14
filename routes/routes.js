let express = require('express')
let router = express.Router()



router.get('/fish', function(req, res,) {
    res.sendFile(path.join(__dirname, '/public', 'fish.json'))
})

router.get('/fish/:id', function(req, res, next) {

})

router.get('bug', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/public', 'bugs.json'))
})

router.get('/bug/:id', function(req, res, next) {

})

module.exports = router