const mongoose=require('mongoose')

const signupTemplate=new mongoose.Schema({
    pickup:{
        type:String,
        required:true
    },
    drop:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    gender:{
        type:String,
        required:true
    },
    idType:{
        type:String,
        required:true
    },
    idCard:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('sampletable',signupTemplate)