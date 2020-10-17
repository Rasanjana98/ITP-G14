const mongoose = require('mongoose');
var order = mongoose.model('order', {
  orderid: {type: String},
  date: {type: Date},
  itemName: {type: String},
  quantity: {type: Number},
  price: {type: Number},
  totalprice: {type: Number}

});

module.exports = {
  order
};
