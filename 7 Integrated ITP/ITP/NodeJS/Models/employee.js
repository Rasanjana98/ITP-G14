const mongoose = require('mongoose');

var employee = mongoose.model('employee', {
    employeeid: { type: String },
    name: { type: String },
    address: { type: String },
    mobileNumber: { type: String },
    birthday: { type:String},
    nicNumber:{ type:String},
    designation:{type: String}
});

module.exports = { employee };