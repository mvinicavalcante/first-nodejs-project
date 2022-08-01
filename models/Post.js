const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({ force: true }) -> Já criada, executada uma última vez senão ela refaz a tabela

module.exports = Post