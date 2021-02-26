const knex = require('knex');
const { node_env } = require('../../config')
const knexfile = require('../knexfile');
const bookshelf = require('bookshelf');



const environment = node_env;
const db = knex(knexfile[environment]);
const bookshelfConfig = bookshelf(db);

module.exports = bookshelfConfig;