const dbconn = require('./mongodbConn');

const insert = async ()=>{
  const db = await dbconn();
  //one record insert karne ka tarika
   const result = await db.insertOne(
    {name: "sher khan", email: "mdsher@email.com", password: "ak0000"}
    )
  if(result.acknowledged){
  console.log('insert sucsess');
  }
}
insert();