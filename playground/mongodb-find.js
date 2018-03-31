const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongodb server');
   }
   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

  db.collection('Todos').find(
      {_id:new ObjectID('5abfc1588d017212546703ee')}
    ).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });

   client.close();
});
