const app = require ("./app")
const dotenv =require("dotenv")




dotenv.config({path:'config/config.env'})
require('./config/connectDB')





app.listen(process.env.PORT, () => {
    console.log(`server running at port number 4000`)
});