const mongoose = require('mongoose');

 mongoose.connect("mongodb+srv://hinakhatoonsk_db_user:lMMNE5XVUSJGPtts@sherali.z1funb0.mongodb.net/?retryWrites=true&w=majority&appName=sherAli");
  
   const productSchema = new mongoose.Schema({
     name:String,
     price:Number,
     brand:String,
     category:String
   });

//insert data
const insertDB = async ()=>{
   const productModel = mongoose.model('products',productSchema);
   let data = new productModel({
     name:'5g pro', 
     price: 5000,
     brand:'lg',
     category:'touch phon'
   });
   let result = await data.save();
   console.log(result); 
}

//update data
const updateDB = async ()=>{
   const productModel = mongoose.model('products',productSchema);
   let data = await productModel.updateOne(
     {name: 'not 7 pr'}, 
     {
       $set: {price: 7000}
     }
     );
   
   console.log(data); 
}

//delete data
const deleteDB = async ()=>{
   const productModel = mongoose.model('products',productSchema);
   let data = await productModel.deleteOne(
     {name: 'not 7 pro'}
     )
   
   console.log(data); 
}

//find data
const findDB = async ()=>{
   const productModel = mongoose.model('products',productSchema);
   let data = await productModel.find({category: "iphon"});
   
   console.log(data); 
}

//jis function ko run karna hai ek ek kare chek karen
findDB();