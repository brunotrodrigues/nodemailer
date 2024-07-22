const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha
const emailRoutes = require('./routes/routes');
const emailRoutesEN = require('./routes/routesEN');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Adicione esta linha
app.use(bodyParser.json());

app.use('/api', emailRoutes);
app.use('/api', emailRoutesEN);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
