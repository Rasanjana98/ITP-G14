const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { delivery } = require('../models/delivery');

// => localhost:3000/delivery/
router.get('/', (req, res) => {
    delivery.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Deliveries :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    delivery.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Delivery :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var delivery1 = new delivery({
        deliveryid: req.body.deliveryid,
        cusName: req.body.cusName,
        address: req.body.address,
        cusMobile: req.body.cusMobile,
        items: req.body.items,
        drName: req.body.drName,
    });
    delivery1.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Delivery Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var delivery1 = {
        deliveryid: req.body.deliveryid,
        cusName: req.body.cusName,
        address: req.body.address,
        cusMobile: req.body.cusMobile,
        items: req.body.items,
        drName: req.body.drName,
    };
    delivery.findByIdAndUpdate(req.params.id, { $set: delivery1 }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Delivery Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    delivery.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in delivery Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
