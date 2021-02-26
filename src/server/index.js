const express = require('express');
const { port_serv } = require('../config');
const router = require('./Routes')

const app = express();
app.use(router)

app.listen(port_serv, () =>{
  console.log(`running on port ${port_serv}`);
})