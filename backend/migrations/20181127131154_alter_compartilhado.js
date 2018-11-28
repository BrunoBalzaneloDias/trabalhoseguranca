
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('compartilhado', table => {
        table.dropColumn('idFile')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('compartilhado')
};
