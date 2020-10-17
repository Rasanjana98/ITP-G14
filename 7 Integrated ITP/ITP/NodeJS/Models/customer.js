const mongoose = require('mongoose');

var customer = mongoose.model('customer',{
  id: {type: String},
  cusName: {type: String},
  address: {type: String},
  cusMobile: {type: Number},
  date: {type: String}
});

module.exports = {customer};