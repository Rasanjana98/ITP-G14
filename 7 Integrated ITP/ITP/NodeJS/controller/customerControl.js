const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { customer } = require('../models/customer');

// => localhost:3000/customer/
router.get('/', (req, res) => {
    customer.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving customer :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        customer.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving customer :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var customer1 = new customer({
        customerid: req.body.customerid,
        cusName: req.body.cusName,
        address: req.body.address,
        cusMobile: req.body.cusMobile,
        date: req.body.date,
    });
    customer1.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Delivery Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var customer1 = {
            customerid: req.body.customerid,
            cusName: req.body.cusName,
            address: req.body.address,
            cusMobile: req.body.cusMobile,
            date: req.body.date
        };
    customer.findByIdAndUpdate(req.params.id, { $set: customer1 }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in customer Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        customer.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in customer Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
