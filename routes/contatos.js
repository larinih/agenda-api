const express = require('express');
const contatoCtrl = require('../controllers/ContatoController');

/**
 * Cria o roteador dos web services
 * relacionados a Lista. Por meio do
 * roteador será possível definir os
 * nossos web services.
 */
const router = express.Router();

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: GET
 */
router.get('/', contatoCtrl.recuperarTodas);

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: POST
 */
router.post('/', contatoCtrl.salvar);

module.exports = router;