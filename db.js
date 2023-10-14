const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb://127.0.0.1/Vehi', {useUnifiedTopology:true , useNewUrlParser: true})
    
    const connection = mongoose.connection

    connection.on('connected' ,()=>{
        console.log('Mongo DB connected succesfull')
    })

    connection.on('error', ()=>{
        console.log('Mongo DB connection Error')
    })

}

connectDB()

module.exports=mongoose