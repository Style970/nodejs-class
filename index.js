const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let num = 0;
event.on('countApi', ()=>{
  num++;
  console.log('event call ',num);
});

app.get('/', (req,res)=>{
  res.send('home api call');
  //event generate kiya hai
  event.emit('countApi');
});

app.get('/list', (req,res)=>{
  res.send('list api call');
});

app.get('/update', (req,res)=>{
  res.send('update api call');
    //event generate kiya hai
  event.emit('countApi');
});

app.listen(5000);