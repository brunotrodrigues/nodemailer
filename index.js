const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/routes');
const emailRoutesEN = require('./routes/routesEN');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).json({message: "Welcome to NodeMailer API, by Solinf, Soluções Informáticas, Lda."});
})

app.use('/api', emailRoutes);
app.use('/api', emailRoutesEN);

app.get('*', function (req, res) {
    res.status(404).json({message: "Error"});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
