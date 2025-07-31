  //  day - 21 and day - 2


const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("run in 3000 port")
})