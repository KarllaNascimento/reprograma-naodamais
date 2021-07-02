const mongoose = require("mongoose");

const connect = () =>{mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
})
   .then(console.log("Database successfully connected"))
   .catch(err => console.error);
}

module.exports = { connect };