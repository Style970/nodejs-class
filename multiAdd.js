const dbconn = require('./mongodbConn');

const insert = async ()=>{
  const db = await dbconn();
  //multiple record insert karne ka tarika
   const result = await db.insertMany([
       {name: "alis", email: "alis@email.com", password: "ak0000"},
      {name: "khan", email: "mdsher@email.com", password: "ak0000"},
       {name: "sahil", email: "sahil@email.com", password: "ak0000"}
       ])
  if(result.acknowledged)
  {
    console.log('multiple insert sucsess');
  }
  
}

insert();