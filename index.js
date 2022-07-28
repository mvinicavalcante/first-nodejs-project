const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config
    //Template
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Conexão com o banco de dados
    const sequelize = new Sequelize('sistemaDeCadastro', 'root', 'vinicius2014', {
        host: "localhost",
        dialect: "mysql"
    })

//Rotas
    app.get('/cad', (req, res) => {
        res.render('formulario')
    })

app.listen(3000, () => {
    console.log('Servidor rodando')
})