const { request, response } = require("express")
const express = require("express")
const app = express()
const port = 8888

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')

//MIDDLEWARE PARA JSON
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//Rotas para usuarios
app.use('/users', users)



app.get('/', (request, response)=>{

    response.sendFile(`${basePath}`)
})

app.listen(port, ()=>{
    console.log(`Servidor on ${port}🚀❤️`)
})