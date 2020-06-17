const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/add-product', (req, res) => {
    res.render('add-product', {pageTitle: 'Add Product'})
})

router.post('/add-product', (req, res) => {
    res.redirect('/')
})

module.exports = router