const express=require('express')
const app = express()
const mongoose = require('mongoose')
const routerurl= require('./routes/routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use("/app",routerurl)



if(mongoose.connect('mongodb+srv://ahamedbasith2015:5xwZZKcucdP25dSk@cluster0.0gipfia.mongodb.net/final-db?retryWrites=true&w=majority&appName=Cluster0')){
    console.log('Database connceted')
}
app.listen(4005, ()=>{
    console.log('server is up and run');
})