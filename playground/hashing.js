const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data={
  id: 10
};

var token = jwt.sign(data, '123abc');
var decoded =jwt.verify(token,'123abc');

console.log(`${token}`);
console.log(decoded);
// var message = 'I asm stupid of stupid';
// var hash = SHA256(message).toString();

//console.log(`${hash}`);

// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
//
// if(resultHash === token.hash){
//   console.log('No modification');
// }else console.log('Modified');
