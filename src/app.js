const express = require('express');
const cors = require('cors');

const apiRouter = require('./routers/api.router');

require('./databases/mysql.db');

const app = express();

app.use(express.json());

// Allow all origins
app.use(cors());

app.get('/', (req, res) => res.send());

app.use('/api', apiRouter);

module.exports = app;
