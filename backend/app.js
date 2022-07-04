
const express=require('express');
const app= express();
const cookieParser=require("cookie-parser")
const bodyParser = require("body-parser");
const cors = require("cors")


app.use(cors({ origin:true, credentials:true }))
app.use(express.json())
app.use(cookieParser('your random secret string here'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/About", (req, res)=>{
//     res.cookie("nevil","Hello");
//     res.send("Hello world")
// })

const user=require('./routes/allRoute')

app.use("/api/tsm1",user)

module.exports=app