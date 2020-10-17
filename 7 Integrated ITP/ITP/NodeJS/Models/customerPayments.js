const mongoose = require('mongoose');

var customerPayemnt = mongoose.model('customerPayemnt', {
    customerId: { type: String },
    customerName: { type: String },
    contacNumber:{type:Number},
    orderDate: { type: Date },
    dueDate: { type: Date },
    amount: { type:Number},
    paidAmount:{ type:Number},
    DueAmont:{type: Number}
});

module.exports = { customerPayemnt };