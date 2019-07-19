var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
      type: String,
      required:true,
      minlength: 1,
      trim: true
    },
    completed:{
      type: Boolean,
      default: false
    }, 
    completedAt:{
      type: Number,
      default: null
    }
});

var newTodo = new Todo({
    text:'Cut nails'
});

newTodo.save().then((doc)=>{
    console.log('Created Todo');
    console.log(JSON.stringify(doc,undefined,2))
},(err)=>{
    console.log('Unable to save todo')
})

var user = mongoose.model('User',{
    email:{
        required:true,
        type:String,
        minlength:1,
        trim:true
    }
});

var newUser = new user({
    email:'gopalchandak95@gmail.com'
});

newUser.save().then((doc)=>{
    console.log('User Saved');
    console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
    console.log('Unable to insert the user');
});