const {mongoose, Schema} = require('mongoose');

const studentSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    contact: String,
    age: Number,
    rollNumber: Number,
    email: String,
    hobbies: Array,
  });

  module.exports = mongoose.model('Student', studentSchema);