const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')

//Utiliznado o express
const app= express()
//Utilizando o handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (request, response)=>{
    const user = {
        name:'Edson',
        surname:'Davi',
        age:18
    }
    const palavra = "teste"
    return response.render('home', {user:user})
})

app.listen(3333, ()=>{
    console.log(`Servidor On 🎮🚀`)
})