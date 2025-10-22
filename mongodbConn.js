const {MongoClient} = require('mongodb')
//agar local main hain to 'mongodb://localhost:port'
const url= 'mongodb+srv://hinakhatoonsk_db_user:lMMNE5XVUSJGPtts@sherali.z1funb0.mongodb.net/?retryWrites=true&w=majority&appName=sherAli';
//database name
const databaseName='nodeDB'
const client= new MongoClient(url);

async function dbconn()
{
    let result = await client.connect();
    db = result.db(databaseName);
    //ye hai table ka name
     return db.collection('users');
    
}
//ye export kiya hai
module.exports= dbconn;