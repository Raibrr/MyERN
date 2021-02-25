const express = require('express');
const {config} = require('dotenv');
const router = require('./Routes')

config();

console.log(process.env.DB_NAME);
const app = express();
app.use(router)

app.listen(process.env.PORT, () =>{
  console.log(`running on port ${process.env.PORT}`);
})