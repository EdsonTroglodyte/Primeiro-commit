const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')

//Utiliznado o express
const app= express()
//Utilizando o handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (request, response)=>{
    return response.render('home')
})

app.listen(2222, ()=>{
    console.log(`Servidor On 🎮🚀`)
})