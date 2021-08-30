const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentrecordSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },  
  nationality: {
    type: String,
    required: true
  },
  studentid: {
    type: String,
    required: true
  }
},{ collection: 'student_record' });


module.exports = mongoose.model('Studentrecord', StudentrecordSchema);