
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('user', table => {
        table.addColumn('chave')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
