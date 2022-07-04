const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt=require("bcryptjs")


const adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "admin"
    },
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
})
// adminSchema.methods.pure("save",async function(next){
//     if(this.isModified("password")){
//         this.password=await bcrypt.hash(this.password,12)
//     }
//     next()
// })
adminSchema.methods.generateAccessToken = async function () {

    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECKEY, {
        expiresIn: process.env.JWT_EXPIRE,
    })
    this.tokens=await this.tokens.concat({token:token})
    await this.save()
    return token;
}
// adminSchema.methods.comparePassword=async function(enterPassword){
//     return await bcrypt.compare(enterPassword,this.password)
// }
module.exports = mongoose.model("admindata", adminSchema)