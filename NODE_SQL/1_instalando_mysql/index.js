const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

// CONFIGURAR A TEMPLATE ENGINE - handlebars

app.engine('handlebars', exphbs.engine())
app.set('view wngine', 'handlebars')

// MIDDLEWARE PARA UTILIZAR OS ARQUIVOS ESTÁTICOS
app.use(express.static('public'))

app.get('/',(request, response)=>{
    return response.render('home')
})

const conn = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'aluno_medio',
    password:'@lunoSenai23.',
    database:'banco2'
})
conn.connect(function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('MYSQL Conectado')
    
    app.listen(7894,()=>{
        console.log('Servidor ON')
    })
})


