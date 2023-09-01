const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const port = 5555

const path = require('path')
const basePath = path.join(__dirname, 'templates' )

app.get('produto/:id',(request, response)=>{
    
    const id = request.params.id
    // Fazer a leitura na tabela do  produto e resgatar um produto dessa tabela
    console.log(`Estamos buscando o Produto:${id}`)

    response.sendFile(`${basePath}/produto.html`)
})

// app.get('/', (req, res)=>{
//     res.sendFile(`${basePath}/index.html`)
// })

app.listen(port, (req, res)=>{
    console.log(`Servidor on ${port}🙁`)
})

// app.get('/',(req, res)=>{
//     res.sendFile(`${basePath}/index.html`)
// })