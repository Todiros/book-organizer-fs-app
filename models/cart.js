const fs = require('fs')
const path = require('path')

const _PATH = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
)

const getProductsFromFile = cb => {
    fs.readFile(_PATH, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(_PATH, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }

            err ? err : cart = JSON.parse(fileContent)

            const currentProductIndex = cart.products.findIndex(p => p.id === id)
            const currentProduct = cart.products[currentProductIndex]
            let updatedProduct;

            if (currentProduct) {
                updatedProduct = { ...currentProduct }
                updatedProduct.qty += 1
                cart.products = [...cart.products]
                cart.products[currentProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatedProduct]
            }

            cart.totalPrice = cart.totalPrice + parseInt(productPrice)

            fs.writeFile(_PATH, JSON.stringify(cart), err => {
                console.log(err)
            })
        })
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(_PATH, (err, fileContent) => {
            if (err) {
                return
            }
            const updatedCart = { ...JSON.parse(fileContent) }

            updatedCart.products = updatedCart.products.filter(prod => {
                if (prod.qty == 1)
                    return prod.id !== id
                else {
                    return prod.qty--
                }
            })


            updatedCart.totalPrice = updatedCart.totalPrice - productPrice;

            fs.writeFile(_PATH, JSON.stringify(updatedCart), err => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}