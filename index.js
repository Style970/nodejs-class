//ye db conection ka file impot kiya hai
const dbconn = require('./mongodbConn');
//data read karne ka code
const main = async ()=>{
  let data = await dbconn();
  data = await data.find().toArray();
  console.log(data);
}

main();