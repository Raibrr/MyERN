const { config } = require('dotenv');

config({path:`${__dirname}/.env`});

console.log(process.env.DB_NAME);
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: process.env.DB_USER,
      database:process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
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