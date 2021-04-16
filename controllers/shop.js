const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { 
            path: '/',
            pageTitle: 'Home Page',
            prods: products,
            hasProducts: products.length > 0
        })
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { 
            path: '/products',
            pageTitle: 'Product List',
            prods: products,
            hasProducts: products.length > 0
        })
    })
}

exports.getProduct = (req, res) => {
    const productId = req.params.productId

    Product.findById(productId, product => {
        res.render('shop/product-detail', {
            path: '/products/'+ productId,
            product: product,
            pageTitle: product.title
        })
    })
}

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.postCart = (req, res) => {
    const productId = req.body.productId;
    
    Product.findById(productId, product => {
        Cart.addProduct(productId, product.price)
    })

    console.log(productId)
    res.redirect('/cart')
}

exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'My Orders'
    })
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}