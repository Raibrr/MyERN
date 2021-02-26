const {Router, urlencoded, json, request} = require('express');
const cors = require('cors')
const badges = require('./badges')
const { request_surce} = require('../../../config')

const corsOptions ={
  origin: `${request_surce}`
}
const router = Router()
  .use(json())
  .use(urlencoded({extended: true}))
  .use(cors(corsOptions))
  .use('/badges',badges)

  module.exports = router;