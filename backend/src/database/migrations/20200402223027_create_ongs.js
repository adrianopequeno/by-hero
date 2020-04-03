/** Método de criação da tabela ONGS*/
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

/** Método de, caso dê um problema na criação da tabela, ele deleta ela */
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
