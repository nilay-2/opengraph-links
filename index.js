const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get("/join", async (req, res) => {
    res.render('opengraph')
})

app.get('/', async (req, res) => {
    res.send("Hello there!")
})

app.listen(5000, () => {
    console.log("App running on port 5000")
})