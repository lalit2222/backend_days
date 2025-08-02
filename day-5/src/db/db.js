const mongoose = require('mongoose')


function connectedDb(){
    mongoose.connect("loclhost://3000 and please connect to your server ").then(()=>{
        console.log("connect db sucessfully ");
        
    })
}
module.exports = connectedDb