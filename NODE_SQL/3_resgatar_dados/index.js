const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

// CONFIGURAR A TEMPLATE ENGINE - handlebars
// RECEBER DADOS DO FRONT END - JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// MIDDLEWARE PARA UTILIZAR OS ARQUIVOS ESTÁTICOS
app.use(express.static('public'))

app.get('/',(request, response)=>{
    return response.render('home')
})

app.post('/books/insertbook', (request, response)=>{
    const {title, nm_pag} = request.body
    //console.log(title, nm_pag)
    const sql = `INSERT INTO books(title,nm_pag) VALUES ('${title}', '${nm_pag}')`
    conn.query(sql, (err)=>{
        if(err){
            console.log(err)
            return
        }
        return response.redirect('/')
    })
})

app.get('/books', (request, response)=>{
    const sql = 'SELECT * FROM books'

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        response.render('books', {books})
    })
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
    
    app.listen(3333 ,()=>{
        console.log('Servidor ON')
    })
})


