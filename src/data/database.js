const mongoose = require("mongoose");

const connect = () =>{mongoose.connect(`mongodb://localhost:27017/tecuida`, {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true,
   useCreateIndex: true
})
   .then(console.log("Database successfully connected"))
   .catch(err => console.error);
}

module.exports = { connect };