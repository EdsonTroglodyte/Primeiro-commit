const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')

//Utiliznado o express
const app= express()
//Utilizando o handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (request, response)=>{
    return response.render('dashboard')
})

app.get('/', (request, response)=>{
    const user = {
        name:'Edson',
        surname:'Davi',
        age:18
    }
    const palavra = "teste"
    const auth = true
    const approved = false
    return response.render('home', {user:user, palavra, auth, approved})
})

app.listen(4444, ()=>{
    console.log(`Servidor On 🎮🚀`)
})