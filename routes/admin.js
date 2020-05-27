const path = require('path')
const express = require('express')
const router = express.Router()

const rootDir = require('../util/path')

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res) => {
    res.redirect('/')
})

module.exports = router