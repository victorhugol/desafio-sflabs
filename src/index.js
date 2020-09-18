const express = require('express');
const { route } = require('./routes/router');
const app = express();
const router = require('./routes/router')

app.use(express.json());

app.use(router);


const PORT = process.env.PORT | 8000

app.listen(PORT)