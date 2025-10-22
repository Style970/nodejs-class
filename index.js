//ye db conection ka file impot kiya hai
const dbconn = require('./mongodbConn');
//data read karne ka code
const main = async ()=>{
  let db = await dbconn();
  data = await db.find().toArray();
  console.log(data);
}

main();