const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config() ;

const { MongoClient } = require('mongodb');

let db;
const url = process.env.DB_URL;
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공');
  db = client.db('project1');
}).catch((err)=>{
  console.log(err);
})

app.listen(8080,()=> {
    console.log('http://localhost:8080 에서 서버 실행중');
});

app.get('/list', async (req, res) => {
  let result = await db.collection('post').find().toArray()
  console.log(result);
  res.json(result);
})




