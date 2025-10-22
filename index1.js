//pehla tarika 
//jab ek hi page main sab kuchh karna ho
const {MongoClient} = require('mongodb')
//agar local main hain to 'mongodb://localhost:port'
const url= 'mongodb+srv://hinakhatoonsk_db_user:lMMNE5XVUSJGPtts@sherali.z1funb0.mongodb.net/?retryWrites=true&w=majority&appName=sherAli';
//datavase name
const databaseName='sample_mflix'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    //ye hai table ka name
    collection = db.collection('users');
    let data = await collection.find({}).toArray();
    
    console.log(data)


}

getData();