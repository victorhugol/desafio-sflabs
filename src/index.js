const express = require('express');
const app = express();
const routerHeroi = require('./routes/routerHeroi')
const routerAnuncio = require('./routes/routerAnuncio');


app.use(express.json());

app.use(routerHeroi);
app.use(routerAnuncio);

const PORT = process.env.PORT | 8000

app.listen(PORT)