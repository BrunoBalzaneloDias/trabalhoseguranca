
exports.up = function(knex, Promise) {
    return knex.schema.createTable('arquivo', table => {
        table.increments('id').primary()
        table.integer('idDono').notNull().references('id').inTable('users')
        table.string('path').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('arquivo')
};
