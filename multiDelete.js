const dbconn = require('./mongodbConn');

const update = async ()=>{
  const db = await dbconn();
  //multiple record delet karbe ka rarika
   const result = await db.deleteMany(
    {name: "sher ali khan"}
    )
    console.warn(result);
    
  if(result.deletedCount > 0){
    console.log('record delete');
  }else{
    console.log('not delete');
  }
}
update();