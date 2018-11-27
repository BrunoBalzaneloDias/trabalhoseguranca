
exports.up = function(knex, Promise) {
    return knex.schema.createTable('compartilhado', table => {
        table.increments('id').primary()
        
        table.integer('idDono').notNull().references('id').inTable('users')
        table.integer('idCompartilhado').notNull().references('id').inTable('users')
        table.integer('idFile').notNull().references('id').inTable('arquivo')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('compartilhado')
};
