const express = require('express');
const app = express();
const routerHeroi = require('./routes/routerHeroi')
const routerAnuncio = require('./routes/routerAnuncio');
const routerCidade = require('./routes/routerCidade');

app.use(express.json());

app.use(routerHeroi);
app.use(routerAnuncio);
app.use(routerCidade);

const PORT = process.env.PORT | 8000

app.listen(PORT)