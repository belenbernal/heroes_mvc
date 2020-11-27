const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

//ruta raiz, home
router.get('/',mainController.index);
router.get('/creditos',mainController.mostrarCreditos);
router.get('*', mainController.error); //siempre al final ;)

module.exports = router;
