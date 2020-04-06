const express = require('express');

// Testes e validação
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SectionController = require('./controllers/SectionController');

const routes = express.Router();

// Rota de Login da ONG
routes.post('/sections', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required().min(8).max(10),
  }),
}), SectionController.create);

// Rota de Listagem de todas as ONGS do BD
routes.get('/ongs', OngController.index);

// Rota de criação de uma ONG / validação dos campos e tipos de dados de entrada
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(9).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);

// Rota para retornar dados de uma ong
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

// Rota de listar todos os incidentes/casos
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);

// Rota de criação de um Incidente/Caso
routes.post('/incidents', IncidentController.create);

// Rota para deletar um Incidente/caso
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentController.delete);



module.exports = routes;