
const jwt = require("jsonwebtoken");
const admindata = require("../models/admModels")
const sendToken=require("../utils/jwtToken")

const crypto = require("crypto")



exports.signupAdmin = async (req, res) => {
    const { fullname, username, email, password } = req.body

    if (!fullname || !username || !email || !password) {
        return res.status(400).json({ message: "plz fil the field properly" });
    }
    try {
        const userExist = await admindata.findOne({ username: username });

        if (userExist) {
            return res.status(400).json({ message: "username alredy exits" });


        } else {
            const admin = new admindata({ fullname, username, email, password });
            // const token = await admin.generateAccessToken()
            console.log(admin);
            sendToken(await admin,200,res)
            // await admin.save();
            // console.log(sendToken)
            // res.status(200).json({ message: "new admin register successfully" });

        }
    } catch (err) {
        console.log(err);
    }
}
exports.loginAdmin = async (req, res) => {

    try {

        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(422).json({ message: "pil filled the deta" })
        }
        const admin = await admindata.findOne({ username: username });
        

        if (!admin) {
            res.status(401).json({ message: "Invalid Credentials" })

        } else {
            // const token = await admin.generateAccessToken()
            // console.log(token);
            sendToken(await admin,201,res)

            // res.status(200).json({ message: "Admin login successful" });

        }
    } catch (err) {
        console.log(err);
    }
};

// logout
exports.adminLogout = async (req, res, next) => {
        res.cookie("token",null,{
          expires: new Date(Date.now()),
          httpOnly: true,
        });

        res.status(200).json({
          success: true,
          message: "Logged Out",
        });
    // res.clearCookie('token')
    // return res.json({ message: "log out" })
};