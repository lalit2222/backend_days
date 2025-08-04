const mongoose = require('mongoose')


let userSchema  = new mongoose.Schema({
    username:String,
    password:String,

})
const userModel = mongoose.model("user",userSchema)

module.exports = userModel