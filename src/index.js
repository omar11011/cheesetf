const path = require('path')
const express = require('express')
const router = require('./router/')

const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(router)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log('Server on port', port)
})

module.exports = app