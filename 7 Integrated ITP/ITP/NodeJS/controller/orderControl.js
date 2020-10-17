const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { order } = require('../models/order');

// => localhost:3000/order/
router.get('/', (req, res) => {
    order.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Orders :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    order.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var order1 = new order({
        orderid: req.body.orderid,
        date: req.body.date,
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        price: req.body.price,
        totalprice: req.body.totalprice,
    });
    order1.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var order1 = {
        orderid: req.body.orderid,
        date: req.body.date,
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        price: req.body.price,
        totalprice: req.body.totalprice,
    };
    order.findByIdAndUpdate(req.params.id, { $set: order }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    order.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
