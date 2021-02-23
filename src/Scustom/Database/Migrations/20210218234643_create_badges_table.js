const tableName = 'badges'

exports.up = (knex) => knex.schema.createTable(tableName, (table) =>{
  table.increments('id').unsigned();
  table.string('firstName');
  table.string('lastName');
  table.string('email')
    .unique()
    .notNull();
  table.string('jobTitle');
  table.string('twitter').unique();
  table.timestamps();
})

exports.down = (knex) => knex.schema.dropTable(tableName);