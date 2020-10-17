const mongoose = require('mongoose');

var delivery = mongoose.model('delivery',{
  id: {type: String},
  cusName: {type: String},
  address: {type: String},
  cusMobile: {type: Number},
  items: {type: String},
  drName: {type: String}
});

module.exports = {delivery};
