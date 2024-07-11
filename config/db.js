const mysql = require('mysql');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar na base de dados:', err);
        throw err;
    }
    console.log('Conectado ao MySQL Database.');
});

module.exports = db;
