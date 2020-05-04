const express = require('express')

const hostname = '127.0.0.1'
const port = 5000

const app = express()

app.use((req, res, next) => {
    console.log("In the middleware!")
    next() // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log("In the next middleware!")
    // ...
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})