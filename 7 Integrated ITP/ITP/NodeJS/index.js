const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var orderControl = require('./controller/orderControl');
var customerPaymentController = require('./controller/customerPaymentController');
var supplierPaymentsController = require('./controller/supplierPaymentsController');
var itemsController = require('./controller/itemsController');
var deliveryController = require ('./controller/deliveryControl');
var employeeController = require ('./controller/employeeController');
var customerController = require('./controller/customerControl');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/order', orderControl);
app.use('/customerpayments', customerPaymentController);
app.use('/supplierpayments', supplierPaymentsController);
app.use('/items', itemsController); 
app.use('/delivery',deliveryController);
app.use('/employee',employeeController);
app.use('/customer', customerController);