const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const port = 3334


const path = require('path')
const basePath = path.join(__dirname, 'templates')

//montar um obj. json
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//Rota para o form
app.get('/user/add', (request, response)=>{
    response.sendFile(`${basePath}/userForm.html`)
})

//Rota para cadastrar as info. do form
app.post('/user/save', (request, response)=>{
    const {name, age} = request.body
    console.log(`Nome:${name} e idade:${age}`)
    response.sendFile(`${basePath}/userForm.html`)
    // const name = request.body
    // const age = req.body
})

app.listen(port, ()=>{
    console.log(`Servidor on ${port}👾`)
})