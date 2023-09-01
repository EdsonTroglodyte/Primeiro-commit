const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')



// Buscar a páginma de formulário de usuário
router.get('/add',(request, response)=>{
    response.sendFile(`${basePath}/userForm.html`)
})

//Cadastrar usuário
router.post('/save', (request, response)=>{
    const {name, age} = request.body
    console.log(`O nome ${name} e idade ${age}`)
    response.sendFile(`${basePath}/userForm.html`)
})

module.exports 