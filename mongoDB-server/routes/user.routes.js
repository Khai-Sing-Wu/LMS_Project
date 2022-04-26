const express = require("express");
const Consumer = require("../model/consumer.model");
const Admin = require("../model/admin.model")
const errorHandler = require("../helpers/errorhandler.helper");

let routes = express.Router();
// CRUD Routes
//----------------------------------------
routes.get("/data",function(req, res){
    console.log("get request for data received");
    Consumer.find(function(error, consumers){
        if(error){ errorHandler(error) }
        else{ res.json(consumers) }
    })
});

routes.post("/add", function(req, res){
    // console.log("add user post request received", req.body);
    let consumer = new Consumer(req.body);
    consumer
    .save()
    .then(function(dbres){
        res.json({ 'message': 'consumer added'})
    })
    .catch(function(error){
        errorHandler(error)
    })
})

routes.get("/order/:id",function(req, res){
    Consumer.find({'uid': req.params.id}, function(error, user2order){
        if(error){errorHandler(error)}
        else{
            res.json(user2order);
        }
    })
});





routes.get("/admin/:id",function(req, res){
    Admin.find({'uid': req.params.id}, function(error, user2order){
        if(error){errorHandler(error)}
        else{
            res.json(user2order)
        }
    })
});

routes.post("/order/:id",function(req, res){
    Consumer.findById(req.params.id, function(error, placeOrder){
        if(error){errorHandler(error)}
        else{
            placeOrder.coat = req.body.shirt;
            placeOrder.jacket = req.body.jacket;
            placeOrder.jeans = req.body.jeans;
            placeOrder.shorts = req.body.shorts;
            placeOrder.shirt = req.body.shirt;
            placeOrder.suit = req.body.suit;
            placeOrder.tshirt = req.body.tshirt;
            placeOrder.undergarment = req.body.undergarment;
            placeOrder.total = req.body.total;
            placeOrder.status = req.body.status;
            placeOrder.save()
            .then((userupdated)=>{
                res.json({"updatedmessage":userupdated});
            })
            .catch((error)=>errorHandler(error));
        }
    })
});




module.exports = routes;