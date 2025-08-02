const mongoose = require('mongoose')


function connectedDb(){
    mongoose.connect("mongodb+srv://lalitmeena9329:M6GffUVUEcKwM3rr@cluster0.in5lubj.mongodb.net/lalit").then(()=>{
        console.log("connect db sucessfully");
        
    })
}
module.exports = connectedDb