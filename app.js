const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const hostname = '127.0.0.1'
const port = 5000

const app = express()

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: '404'})
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})