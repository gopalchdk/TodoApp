const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongodb server');
   }
   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({text:'go to gym'},{
      $set:{
          completed:true
      }
  },{
      returnOriginal:false
  }).then((result)=>{
      console.log(JSON.stringify(result,undefined,2));
  })

   client.close();
});
