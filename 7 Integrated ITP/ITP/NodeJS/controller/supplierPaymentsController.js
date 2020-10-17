const express = require('express');
var router = express.Router();
 var ObjectId = require('mongoose').Types.ObjectId;

var { supplierPayment } = require('../models/supplierPayments');


router.get('/', (req, res) => {
    supplierPayment.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Supplier Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/:id', (req, res) => {
     if (!ObjectId.isValid(req.params.id))
         return res.status(400).send(`No record with given id : ${req.params.id}`);

         supplierPayment.findById(req.params.id, (err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
     });
 });

router.post('/', (req, res) => {
    var sup = new supplierPayment({
        SupplierID: req.body.SupplierID,
        SupplierName: req.body.SupplierName,
        OrderDate: req.body.OrderDate,
        Amount: req.body.Amount,
        PaidAmount :req.body.PaidAmount,
        DueAmount: req.body.DueAmount,
        DueDate: req.body.DueDate,
    });
    sup.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var sup = {
        SupplierID: req.body.SupplierID,
        SupplierName: req.body.SupplierName,
        OrderDate: req.body.OrderDate,
        Amount: req.body.Amount,
        PaidAmount :req.body.PaidAmount,
        DueAmount: req.body.DueAmount,
        DueDate: req.body.DueDate,
    };
    supplierPayment.findByIdAndUpdate(req.params.id, { $set: sup }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        supplierPayment.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
