const {db_name, db_user, db_password } = require('../config/index')

console.log(db_name);
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: db_user,
      database:db_name,
      password: db_password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/Database/Migrations`,
      extension: 'js',
    },
  },
};