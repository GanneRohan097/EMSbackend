const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
  role: { 
    type: String, 
    enum: ['Software', 'HR Manager', 'Sales Executive', 'Finance Manager'],
    required: true
  },
  department: { 
    type: String, 
    enum: ['IT', 'HR', 'Sales', 'Finance'],
    required: true
  },
  status: { 
    type: String, 
    enum: ['Active', 'Inactive'],
    default: 'Active'
  }, 
  salary:{
    type:Number,
    required:true
  } 
});

module.exports = mongoose.model('Employee',employeeSchema);