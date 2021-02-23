const {Router, urlencoded, json} = require('express');
const badges = require('./badges')


const router = Router()
  .use(json())
  .use(urlencoded({extended: true}))
  .use('/badges',badges)

  module.exports = router;