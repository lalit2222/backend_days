const mongoose = require('mongoose')


function connectedDb(){
    mongoose.connect("loclhost://").then(()=>{
        console.log("connect db sucessfully");
        
    })
}
module.exports = connectedDb
