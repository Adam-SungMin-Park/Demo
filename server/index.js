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

app.post('/api/Demo',(req,res)=>{
  const sql = `
    insert into "items"("itemName" , "itemPrice" , "itemImage" , "itemQty")
    values ($1, $2, $3, $4)
    returning "itemId"
  `
  const params = [req.body.itemName , req.body.itemPrice ,req.body.itemImage, req.body.itemQty]

  db.query(sql,params)
  .then(res => res.status(201).json(result.rows))
  .catch(err => console.log("THIS IS KILLING" + err))


})




app.use(staticMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
