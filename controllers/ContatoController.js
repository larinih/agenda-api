const Contato = require('../models/Contatos');

let contatos = [];

const controller = {
    // Arrow function
    recuperarTodas: (req, res) => res.json(contatos),
    salvar: (req, res) => {
        const nome = req.body.nome;

        /**
         * Verifica se foi informado
         * o nome da contato
         */
        if (nome) {
            let contato = new Contato(nome);
            contatos.push(contato);
            res.status(201).json(contato);
        } else {
            res.status(400).json({
                mensagemErro: 'Nome do contato não informado'
            });
        }
    }
};

module.exports = controller;