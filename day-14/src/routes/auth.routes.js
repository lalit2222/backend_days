const express = require('express')
const jwt = require('jsonwebtoken')

const authUser = require('../models/auth.model')
const { message } = require('prompt')




const router = express.Router()


router.post("/register",async (req,res)=>{
   const {username , password} = req.body
   const isUserCheck = await authUser.findOne({
    username
   })
   if(isUserCheck){
    return res.status(400).json({
        message:"user is already exist"
    })
   }
   const user = await authUser.create({
    username , password
   })

const token = jwt.sign({id:user._id},process.env.JWT_SECRETKEY)


res.cookie("token" , token)


res.status(201).json({
    message:"user register sucessfully",
    user
})

    
   
})

router.get("/profile",async (req,res)=>{
      const token = req.cookies.token
 const decodeToken = jwt.verify(token , process.env.JWT_SECRETKEY)
const userfind = await authUser.findOne({
    _id :decodeToken.id
})
 res.status(201).json({
    message:"user featch sucessfully",
    userfind
 })
    
      
      
})

router.post("/login", async (req,res)=>{
    const {username , password} = req.body

    const user = await authUser.findOne({
        username
    })

    if(!user){
        return res.status(404).json({
            message:"username does not exit"
        })
    }
    const isUserExit = password === user.password
    if(!isUserExit){
        return res.status(404).json({
            message:"password incorrect"
        })
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRETKEY)
    
    res.cookie("token",token)
    console.log(token);
})

router.get("/login",async (req,res)=>{
   res.clearCookie("token")

   res.status(200).json({
    message:"logout sucessfully"
   })
})



module.exports = router