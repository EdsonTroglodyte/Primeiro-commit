const express = require('express')
const app = express()
const port = 4444

app.get('/', (req, res)=>{
    res.send(`<h1>Olá mundo</h1>`)
})