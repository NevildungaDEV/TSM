
const mongoose=require("mongoose");
const jwt = require("jsonwebtoken");
// const bcrypt=require('bcrypt');
var validator =require('validator');
const userSchema=new mongoose.Schema({
    fullname:{
type:String,
required:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"plz eneter valide email"]
    },
    password:{
        type:String,
        require:true,
        min:5
    },
   
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]

})



userSchema.methods.generateAuthToken = async function(){
    try{
        let newToken = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:newToken});
        await this.save();
        return newToken;

    }catch(err){
        console.log(err);
    }
}



module.exports=mongoose.model("SIGNUP",userSchema);












// oMznwkC4XAXIQqPJ