const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios'); // Adicione esta linha
const emailRoutes = require('./routes/routes');
require('dotenv').config();
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', emailRoutes);

// Função para obter o IP público
async function getPublicIP() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        console.error('Erro ao obter o IP público:', error);
        return 'IP não disponível';
    }
}

// Serve o arquivo HTML quando a rota base (/) é acessada
app.get('/', async (req, res) => {
    const publicIp = await getPublicIP();
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao carregar o template.');
            return;
        }
        const html = data.replace('{{ip}}', publicIp);
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
