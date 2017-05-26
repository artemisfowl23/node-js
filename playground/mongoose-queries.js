const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


var id = '59276336fc1ee67f71786823';

// if(!ObjectID.isValid(id)){
//   console.log('ID is not  valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// })
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID',todo);
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
  if(!user){
    return console.log('ID not found');
  }
  console.log('User By ID',user);
}).catch((e) => console.log(e))
