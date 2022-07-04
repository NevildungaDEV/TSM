const jwt = require("jsonwebtoken")
const admindata=require("../models/admModels")

exports.isAuth=async(req,res,next)=>{
     const token=req.cookies.jwt
     if(!token){
         return next("plz login for access",401)
        }
         const decodedDate=jwt.verify(token,process.env.JWT_SECKEY)
        req.admin=await admindata.findById(decodedDate.id)
        next()
    }
exports.authRole=(...roles)=>{
    return (req,res,next)=>{
        if (!roles.includes(req.admin.role)){
            return (`role:${req.admin.role}is not allowed to access`,403)
        }
        next()
    }
}