const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongodb server');
   }
   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   //delete many
//    db.collection('Todos').deleteMany({text:'Go to gym'}).then((result)=>{
//      console.log(JSON.stringify(result,undefined,2));
//    },(err)=>{
//        console.log('Unable to delete',err)
//    })

   //delete one


   //findOneAndDelete
   db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
       console.log(JSON.stringify(result,undefined,2));
   })

   client.close();
});
