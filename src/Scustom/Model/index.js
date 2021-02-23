const knex = require('knex');
const { config } = require('dotenv')
const knexfile = require('../knexfile');
const bookshelf = require('bookshelf');

config({path:`${__dirname}/../.env`});

const environment = process.env.NODE_ENV;
const db = knex(knexfile[environment]);
const bookshelfConfig = bookshelf(db);

module.exports = {
  db,
  bookshelfConfig
}