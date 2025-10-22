const dbconn = require('./mongodbConn');

const update = async ()=>{
  const db = await dbconn();
  //one record delete karne ka tarika
   const result = await db.deleteOne(
    {name: "ali khan"}
    )
    console.warn(result);
    
  if(result.deletedCount > 0){
    console.log('record delete');
  }else{
    console.log('not delete');
  }
}
update();