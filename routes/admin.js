const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)

// /admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct)

// /admin/edit-product => POST
router.post('/edit-product', adminController.postEditProduct)

// /admin/delete-product/productId => POST
router.post('/delete-product/:productId', adminController.postDeleteProduct)

module.exports = router