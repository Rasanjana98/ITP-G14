const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Items } = require('../models/items');
const items = require('../models/items');

router.get('/', (req, res) => {

    Items.find((err, docs) => {

        if(!err) {
            
            res.send(docs);
        }
        else{

            console.log('Error in retriving Items:' + JSON.stringify(err, undefined, 2));

        }

    });

});

//retrieving items function start
router.get('/:id', (req, res) => {

    if(!ObjectId.isValid(req.params.id)){

        return res.status(400).send('No record with given id: ${req.params.id}');
    
    }

        Items.findById(req.params.id, (err, doc) => {

                if(!err){

                    res.send(doc);
                }
                else{

                    console.log('Error in Retriving Item data :' + JSON.stringify(err, undefined, 2));


                }
        });
    



});

//insert item function start

router.post('/', (req, res) => {

    var itm = new Items({


        item_code: req.body.item_code,
        name: req.body.name ,
        item_desc: req.body.item_desc ,
        category_ID: req.body.category_ID ,
        inven_ID: req.body.inven_ID,
        date: req.body.date ,
        qty: req.body.qty,
        min_level: req.body.min_level,
        supOrderID: req.body.supOrderID
    });

    itm.save((err, doc) => {

        if(!err){

            res.send(doc);

        }
        else{

            consol.log('Error in Items saving:' + JSON.stringify(err,undefined, 2))
        }
    });
});

//update item function start

router.put('/:id', (req, res) => {

    
    if(!ObjectId.isValid(req.params.id)){

        return res.status(400).send('No record with given id: ${req.params.id}');
    }

    var itm = {

        item_code: req.body.item_code,
        name: req.body.name ,
        item_desc: req.body.item_desc ,
        category_ID: req.body.category_ID ,
        inven_ID: req.body.inven_ID,
        date: req.body.date ,
        qty: req.body.qty,
        min_level: req.body.min_level,
        supOrderID: req.body.supOrderID

    };

    
    Items.findByIdAndUpdate(req.params.id, { $set: itm}, {new: true}, (err, doc) => {

        if(!err){

            res.send(doc);

        }
        else{

            consol.log('Error in Items Updating:' + JSON.stringify(err,undefined, 2))
        }

    });
    
});


//delete function start

router.delete('/:id', (req, res) => {
    
    //given id validation
    if(!ObjectId.isValid(req.params.id)){

        return res.status(400).send('No record with given id: ${req.params.id}');
    }

    Items.findOneAndRemove(req.params.id, (err, doc) => {

        if(!err){

            res.send(doc);

        }
        else{

            consol.log('Error in Items Deleting:' + JSON.stringify(err,undefined, 2))
        }

    });

});


module.exports = router;