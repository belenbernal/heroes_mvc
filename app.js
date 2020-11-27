// Require de Express
const express = require('express');
// Ejecución de Express
const app = express();

const mainRouter = require('./routes/main')
const controllerRouter = require('./routes/heroes')
const mainRoutes = require('./routes/main');
// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/heroes',controllerRouter)
app.use('/',mainRouter)

