const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName:{type: 'string',},
  lastName:{type: 'string',},
  emalId:{type: 'string',},
  password:{type: 'string',},
  age:{type: 'string',},
  gender:{type: 'string',},
});

module.exports = mongoose.model('User', userSchema);
