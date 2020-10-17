const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { customerPayemnt } = require('../models/customerPayments');

// localhost:3000/customerPayments
router.get('/', (req, res) => {
    customerPayemnt.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        customerPayemnt.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    var pay = new customerPayemnt({
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        contacNumber:req.body.contacNumber,
        orderDate: req.body.orderDate,
        dueDate: req.body.dueDate,
        amount:req.body.amount,
        paidAmount:req.body.paidAmount,
        DueAmont:req.body.DueAmont,
    });
    pay.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var pay = {
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        contacNumber:req.body.contacNumber,
        orderDate: req.body.orderDate,
        dueDate: req.body.dueDate,
        amount:req.body.amount,
        paidAmount:req.body.paidAmount,
        DueAmont:req.body.DueAmont,
    };
    customerPayemnt.findByIdAndUpdate(req.params.id, { $set: pay }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        customerPayemnt.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports=router;