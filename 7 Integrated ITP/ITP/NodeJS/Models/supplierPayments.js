const mongoose = require('mongoose');

var supplierPayment = mongoose.model('supplierPayment', {
    SupplierID: {type:String},
    SupplierName: {type:String},
    OrderDate: {type:Date},
    Amount:{type:Number},
    PaidAmount:{type:Number},
    DueAmount:{type:Number},
    DueDate:{type:Date},
});

module.exports = { supplierPayment };
