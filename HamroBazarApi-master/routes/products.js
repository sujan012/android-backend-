const express = require('express');
const Product = require('../models/products');
const router = express.Router();



router.get('/',(req,res,next)=>{
    Product.find({},(err,products)=>
    {
        if(err){
            res.json(next)
        }
        res.json(products)
    });
})

router.post('/',(req,res,next)=>{
    Product.create({
        name:req.body.name,
        price:req.body.price,
        condition:req.body.condition,
        image:req.body.image
    }).then((product)=>{
        res.json({status:"Product Added Successfully"});
    }).catch(next);
})

module.exports=router;