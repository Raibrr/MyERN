const { config } = require('dotenv')
config({path: `${__dirname}/../../.env`});

module.exports = {
  node_env: process.env.NODE_ENV,
  port_serv: process.env.PORT_SERV,
  db_name: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
  db_user: process.env.DB_USER,
  api_url: process.env.REACT_APP_API_URL,
  request_surce: process.env.REQUEST_SURCE
};