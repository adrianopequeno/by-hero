const genereteUniqueId = require('../utils/generateUniqueId');
const connectionDb = require('../database/connection');

module.exports = {

    // Método de Listagem de todas as ONGS
    async index(request, response) {
      // selecionando os dados no Bd
      const ongs = await connectionDb('ongs').select('*');

      return response.json(ongs);
    },

    // Método de criação de uma ONG
    async create(request, response) {
      const { name, email, whatsapp, city, uf } = request.body;

      // criptografando o Id do usuário ongs
      const id = genereteUniqueId();

      // inserindo dados na table ongs
      await connectionDb('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf
      });

      // retorna o id para o usuário ter acesso ao sistema
      return response.json({ id });
    }
};