const { Schema, model } = require('mongoose');

const deptSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Department = model('Department', deptSchema);
  
module.exports = Department;
