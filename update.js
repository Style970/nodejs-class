const dbconn = require('./mongodbConn');

const update = async ()=>{
  const db = await dbconn();
  //one record insert karne ka tarika
   const result = await db.updateOne(
    {name: "sher"},{ $set: {name: "ali khan", email: "alikhan@gmail.com"}}
    )
    console.warn(result);
    
  if(result.modifiedCount > 0){
    console.log('updated sucsses');
  }else{
    console.log('not update');
  }
}
update();