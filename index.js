const express = require('express');
const dbconn = require('./mongodbConn');
const mongodb = require('mongodb');
const app = express();

//body se data json main convert karega
app.use(express.json());

//read data
app.get('/', async (req, res)=>{
  let db = await dbconn();
  data = await db.find().toArray();
  console.log(data);
  res.send(data);
});

//insert
app.post('/', async (req, res)=>{
  const db = await dbconn();
  const result = await db.insertOne(req.body);
  if(result.acknowledged){
    res.send({status: 200, message:'insert success'});
  }
  
});
// update
app.put('/:name', async (req, res)=>{
  const db = await dbconn();
  const result = await db.updateOne({name: req.params.name},{$set: req.body});
  if(result.modifiedCount > 0){
    res.send({status: 200, message:'update success'});
  }else if(result.matchedCount > 0){
    res.send({status: 200, message:'alredy updated'});
  }else{
    res.send({status: 404, message:'no record found'});
  }
  
});

//delete
app.delete('/:id', async (req, res)=>{
  const db = await dbconn();
  const result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
  if(result.deletedCount > 0){
    res.send({status: 200, message:'delete success'});
  }else{
    res.send({status: 404, message:'no record'});
  }
});

app.listen(5000);