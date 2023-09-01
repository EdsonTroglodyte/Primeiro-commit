const { response } = require('express')
const express = require('express')
const app = express()
const port = 1234

const path = require('path')
const basePath = path.join(__dirname,'templates')


app.get('/', (request, response)=>{
    response.sendFile(`${basePath}/index.html`)
})

//DEVE SER CRIADO DEPOIS DA ULTIMA ROTA
//ISSO É UM MIDDLEWARE
app.use(function(request, response, next){
    response.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor ON ${port}🎮❤️`)
})