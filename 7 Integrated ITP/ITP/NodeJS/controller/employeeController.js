const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { employee } = require('../models/employee');

// localhost:3000/customerPayments
router.get('/', (req, res) => {
    employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    var pay = new employee({
        employeeid: req.body.employeeid,
        name: req.body.name,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        birthday:req.body.birthday,
        nicNumber:req.body.nicNumber,
        designation:req.body.designation,
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
        employeeid: req.body.employeeid,
        name: req.body.name,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        birthday:req.body.birthday,
        nicNumber:req.body.nicNumber,
        designation:req.body.designation,
    };
    employee.findByIdAndUpdate(req.params.id, { $set: pay }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports=router;