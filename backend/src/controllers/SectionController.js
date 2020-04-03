const connectionDB = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connectionDB('ongs')
      .where('id', id)
      .select('name')
      .first();

      if (!ong) {
        /**
         * 400 Bad Request
          * Essa resposta significa que o servidor não entendeu
          * a requisição pois está com uma sintaxe inválida.
         */
        return response.status(400).json({ error: 'No ONG found with this ID' });
      }

      return response.json(ong);

  }
}