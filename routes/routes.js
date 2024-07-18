const express=require('express')
const router= express.Router()

//database schema
const signupTemplatecopy = require('../model/Signupmodel')

router.post("/signup",(req,res)=>{
    const sam=new signupTemplatecopy({
        pickup:req.body.pickup,
        drop:req.body.drop,
        date:req.body.date,
        gender:req.body.gender,
        idType:req.body.idType,
        idCard:req.body.idCard,
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        age:req.body.age
    })

    sam.save().then(data=>{
        res.json(data)
        console.log('Data added successfully');

    }).catch(e=>{
        res.json(e)
    })
})


module.exports=router;