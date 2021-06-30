const mongoose = require("mongoose");

const connect = () =>{mongoose.connect("mongodb://localhost:27017/naodamais", {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
})
   .then(console.log("Database successfully connected"))
   .catch(err => console.error);
}

module.exports = { connect };