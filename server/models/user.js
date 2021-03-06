const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _= require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    validate:{
      validator:  validator.isEmail,
      message: '{value} is not a valid email'
    }
  },
  password : {
    type: String,
    required : true,
    minLength: 6,
    trim: true,
  },
  tokens: [{
    access:{
      type: String,
      required: true
    },
    token:{
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function(){
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(), access},'abc123').toString();

  user.tokens.push({
    access,
    token
  });
  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken =  function(token){
  var User = this;
  var decoded;

  try{
    decoded = jwt.verify(token,'abc123');
  }catch(e){
    return Promise.reject();
  
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  });
};

var User = mongoose.model('User',UserSchema);


module.exports = {User};
