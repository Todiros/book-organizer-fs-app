const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
)

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p,  (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}
            
            err ? err : cart = JSON.parse(fileContent)

            const currentProductIndex = cart.products.findIndex(p => p.id === id)
            const currentProduct = cart.products[currentProductIndex]
            let updatedProduct;

            if (currentProduct) {
                updatedProduct = {...currentProduct}
                updatedProduct.qty += 1
                cart.products = [...cart.products]
                cart.products[currentProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products, updatedProduct]
            }

            cart.totalPrice = cart.totalPrice + parseInt(productPrice)

            console.log(cart.totalPrice)

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err)
            })
        })
    }
}