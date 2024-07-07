const express=require('express')
const RegisterRouter=require('./reg')
const app=express()
app.use(express.json())
app.use(RegisterRouter)

const error=(err,req,res,next)=>{
    res.status(401).json({success:false,message:err.message})
    
}
app.use(error)
app.listen(3000,()=>console.log('server is running on port 3698'))
