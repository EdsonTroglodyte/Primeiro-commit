const express = require('express')
const app = express()
const port = 9874

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/',(req, res)=>{
    //res.send('Olá mundo')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log('Servidor rodando na porta' +port)
    console.log(basePath)
})

app.get('/contatos',(req, res)=>{
    res.sendFile(`${basePath}/contatos.html`)
})