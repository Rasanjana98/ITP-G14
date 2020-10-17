const mongoose = require('mongoose');

var Items = mongoose.model('Items', {

    item_code: { type: Number },
    name: { type: String },
    item_desc: { type: String },
    category_ID: { type: String },
    inven_ID: { type: String },
    date: { type: String },
    qty: { type: Number },
    min_level: { type: Number },
    supOrderID: { type: Number }


});
 
module.exports = {

    Items
};
