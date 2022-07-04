const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")


const empScema = new mongoose.Schema({
    empId: {
        type: Number,
        required: true
    },
    empName: {
        type: String,
        require: true
    },
    empEmail: {
        type: String,
        required: true
    },
    username: {
        type: String,
        require: true
    },
    empMobile: {
        type: Number,
        require: true,
        min: 10
    },
    password: {
        type: String,
        require: true,
        min: 3,
        max: 10
    },
    role: {
        type: String,
        default: "employee"
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});
// empScema.methods.pure("save",async function(next){
//     if(this.isModified("empPassword")){
//         this.empPassword=await bcrypt.hash(this.empPassword,12)
//     }
//     next()
// })

empScema.methods.generateAccessToken = async function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECKEY, {
        expiresIn: process.env.JWT_EXPIRE,
    })
    this.tokens = await this.tokens.concat({ token: token })
    await this.save()
    return token;
}

module.exports = mongoose.model("employeeRegister", empScema);