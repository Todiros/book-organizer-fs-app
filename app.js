const express = require('express')

const hostname = '127.0.0.1'
const port = 5000

const app = express()

app.use('/products', (req, res, next) => {
    res.send('<h1>Products Y\'all!</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Sup\' Express!</h1>')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})