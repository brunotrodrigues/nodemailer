const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('../routes/routes');
const emailRoutesEN = require('../routes/routesEN');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("GET /");
    res.status(200).json({ message: "Welcome to NodeMailer-API v1.0, by Solinf, Soluções Informáticas, Lda." });
});

app.use('/api', emailRoutes);
app.use('/api', emailRoutesEN);

app.get('*', function (req, res) {
    console.log("Route not found: ", req.originalUrl);
    res.status(404).json({ message: "Error" });
});

app.use((err, req, res, next) => {
    console.error("Internal Server Error: ", err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

module.exports.handler = serverless(app);
