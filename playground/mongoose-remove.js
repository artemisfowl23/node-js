const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


// var id = '59276336fc1ee67f71786823';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID is not  valid');
// }
Todo.delete({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id:'592799e9de8dbd4d89f4b4fc'}).then((todo) => {
  console.log('Todo',todo);
})

Todo.findByIdAndRemove('592799e9de8dbd4d89f4b4fc').then((todo) => {
  console.log(todo);
}).catch((e) => console.log(e))
//
// User.findById(id).then((user) => {
//   if(!user){
//     return console.log('ID not found');
//   }
//   console.log('User By ID',user);
// }).catch((e) => console.log(e))
