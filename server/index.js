require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const argon2  = require('argon2');
const jsonMiddleware = express.json();
const jwt = require('jsonwebtoken');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonMiddleware);

app.post('/demo/item',(req,res)=>{

})




app.use(staticMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
