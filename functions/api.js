const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('../routes/routes');
const emailRoutesEN = require('../routes/routesEN');
require('dotenv').config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

router.get('/', function (req, res) {
    res.status(200).json({ message: "Welcome to NodeMailer-API v1.0, by Solinf, Soluções Informáticas, Lda." });
});

router.use('/api', emailRoutes);
router.use('/api', emailRoutesEN);

router.get('*', function (req, res) {
    res.status(404).json({ message: "Error" });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);