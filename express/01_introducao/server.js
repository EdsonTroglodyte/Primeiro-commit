const express = require('express')
const app = express()
console.log(express)

const port = 5555

// app.get('/',(req, res) =>{
//     res.send('Olá, mundo!')
// })

app.listen(port, ()=>{
    console.log(`Servidor on na porta${port}`)
})

app.get('/clientes',(req, res)=>{
    res.send('Olá, mundo')
})