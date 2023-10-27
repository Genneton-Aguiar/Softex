const express= require('express');
const app = express();

app.get("/", async (req, res) => {
    res.send("PAGINA INICIAL")
});

app.listen(5005, ()=>{
    console.log("Estou vivo,rodando na porta 5005: http://localhost:5005")
})

const Sequelize = require('sequelize');

const sequelize = new Sequelize('victor', 'root', 'Firework', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("conexão com banco de dados realizada com sucesso!")
}).catch(function () {
    console.log("erro, conexão com o banco de dados nao realizada.")
})

module.exports = sequelize;




