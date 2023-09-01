const { response } = require('express')
const express = require('express')
const app = express()
const port = 4569

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//Arquivos Estáticos -> CSS, IMG, VIDEOS, JS
app.use(express.static('public'))

app.get('/', (require, response)=>{
    response.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`Servidor ON ${port}👾🎮🕹️`)
})