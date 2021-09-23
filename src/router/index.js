const router = require('express').Router()

router.get('/', (req, res) => res.render('home'))
router.get('/full', (req, res) => res.render('full'))

module.exports = router