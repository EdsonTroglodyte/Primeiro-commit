const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')

//Utiliznado o express
const app= express()
//Utilizando o handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (request, response)=>{
    return response.render('home', {layout:false})
})

app.listen(1111, ()=>{
    console.log(`Servidor On 🎮🚀`)
})