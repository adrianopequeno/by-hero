const connectionDB = require('../database/connection');

// Controller responsável pelo perfíl de uma ONG, entidade.
module.exports = {
  // médoto responsável por retornar dados específicos de uma ONG
  async index(request, response) {
    // acessando os dados de uma ong logado
    const ong_id = request.headers.authorization;

    // buscar os incidentes da ong
    const incidents = await connectionDB('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
    }
}