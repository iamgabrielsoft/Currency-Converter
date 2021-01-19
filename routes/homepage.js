
var router = require('express').Router()

const homepage = router.get('/', (req, res, next) => {
    console.log('HomePage Tracked')
    res.render('pages/index')
})





module.exports = {
    homepage
}