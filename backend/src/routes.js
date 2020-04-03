const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SectionController = require('./controllers/SectionController');

const routes = express.Router();

// Rota de Login da ONG
routes.post('/sections', SectionController.create);

// Rota de Listagem de todas as ONGS do BD
routes.get('/ongs', OngController.index);
// Rota de criação de uma ONG
routes.post('/ongs', OngController.create);

// Rota para retornar dados de uma ong
routes.get('/profile', ProfileController.index);

// Rota de listar todos os incidentes/casos
routes.get('/incidents', IncidentController.index);
// Rota de criação de um Incidente/Caso
routes.post('/incidents', IncidentController.create);
// Rota para deletar um Incidente/caso
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;