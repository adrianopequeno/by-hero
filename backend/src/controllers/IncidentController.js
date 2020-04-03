const connectionDB = require('../database/connection');

module.exports = {

  // método de listar/puchar todos os incidentes do BD
  async index(request, response) {
    // paginação
    const { page = 1 } = request.query;

    // variável que guarda o retorna a quantidade registros de incidentes/casos
    const [count] = await connectionDB('incidents').count();

    // paginação e seleção de incidentes
    const incidentes = await connectionDB('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      'incidents.*',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf'
    ]);

    // retorno da quantidade de registro/incidentes da ONG
    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidentes);
  },

  // Metodo de criação de um incidente/caso
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connectionDB('incidents').insert({
        title,
        description,
        value,
        ong_id
      });

    return response.json({ id });
  },

  // Método de Deletar/Excluir um incidente/caso
  async delete(request, response) {
    // id do Incidente/caso para ser excluido
    const { id } = request.params;
    // Pega o id da ong logada
    const ong_id = request.headers.authorization;

    /** 
      * verificação se o id do incidente a ser excluido foi realmente
      * criado pelo usuário logado
    */
    const incident = await connectionDB('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
        
    if (incident.ong_id !== ong_id) {
      /**
        * 401 Unauthorized
        * Embora o padrão HTTP especifique "unauthorized", 
        * semanticamente, essa resposta significa "unauthenticated".
        * Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
      */
        return response.status(401).json({ error: 'Operation not permitted.' }) // Não autorizado 
    }

    await connectionDB('incidents').where('id', id).delete();

    /**
      * 204 No Content
      * Não há conteúdo para enviar para esta solicitação,
      * mas os cabeçalhos podem ser úteis. O user-agent pode
      * atualizar seus cabeçalhos em cache para este recurso com os novos.
    */
    return response.status(204).send();
  }


};