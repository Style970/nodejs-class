const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

//pehla tarika
//app.use(express.static(publicPath));

//dusra tarika
//default rout
app.get('/', (req,res) =>{
  res.sendFile(`${publicPath}/index.html`);
});
//rout ka name alag bhi rakh sakte hain
app.get('/aboutus', (req,res) =>{
  res.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (req,res) =>{
  res.sendFile(`${publicPath}/help.html`);
});


app.listen(5000);