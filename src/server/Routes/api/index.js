const {Router, urlencoded, json} = require('express');
const cors = require('cors')
const badges = require('./badges')


const router = Router()
  .use(json())
  .use(urlencoded({extended: true}))
  .use(cors())
  .use('/badges',badges)

  module.exports = router;