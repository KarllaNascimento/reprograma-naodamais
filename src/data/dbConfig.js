const mongoose = require("mongoose");
require("dotenv").config()

const connect = () =>{mongoose.connect(process.env.DATABASE_URI, {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true,
   useCreateIndex: true
})
   .then(console.log("Database successfully connected"))
   .catch(err => console.error);
}

module.exports = { connect };