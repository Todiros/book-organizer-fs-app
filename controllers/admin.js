const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null, title, imageUrl, price, description)
    product.save()
    res.redirect('/')
}

exports.getEditProduct = (req, res) => {
    console.log(req.query.edit)
    const prodId = req.params.productId;

    Product.findById(prodId, product => {
        if (!product)
            return res.redirect('/')

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            product: product
        })
    })
}   

exports.postEditProduct = (req, res) => {
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedPrice = req.body.price
    const updatedImageUrl = req.body.imageUrl 
    const updatedDesc = req.body.description
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedPrice, updatedDesc)
    updatedProduct.save()
    res.redirect('/admin/products')
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products-admin', { 
            path: '/admin/products',
            pageTitle: 'Admin Products',
            prods: products,
            hasProducts: products.length > 0
        })
    })
}

exports.postDeleteProduct = (req, res) => {
    const productId = req.params.productId;

    console.log(productId)
    res.redirect('/')
}