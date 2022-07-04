const admindata = require("../models/admModels")


const sendToken = async(admindata,statusCode,res)=>{
    const token= await admindata.generateAccessToken()


        // options for cookie
        const options = {
          expires: new Date(
            Date.now() + 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
      res.cookie("jwt",token,options).json({
          success:true,
          message:"sccessfully",
          token
      })
}

module.exports=sendToken