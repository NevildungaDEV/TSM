const mongoose = require('mongoose');




mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`DB connnection successful`);
}).catch((err) => console.log(err));