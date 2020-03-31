const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})


app.get('/a', (req, res) => {
    res.send('why are you here ?')
})


app.listen(3232)