const express = require('express')
const router  = express.Router()

const userModel = require('../model/user.model')
const { message } = require('prompt')


router.post("/register",async(req,res)=>{
    const {username , password} = req.body

  await userModel.create({
    username:username,
    password:password
    
  })
 
  
  res.status(201).json({
    message:"user register sucessfully"
  })
})

router.post("/login", async(req,res)=>{
    const {username,password} = req.body
    const userExist = await userModel.findOne({
        username:username
    })

    
    
    if(!userExist){
        return res.json({
            message:"user does not exit in the field"
        })
    }
    const checkPass = password === userExist.password
    if(!checkPass){
        return res.json({
            message:"invalid password"
        })
    }

    res.json({
        message:"loggin sucessfully"
    })
})






module.exports = router