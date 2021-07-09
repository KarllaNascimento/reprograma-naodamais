const mongoose = require("mongoose");
require("dotenv").config()

const MONGO_URL = process.env.MONGODB_URI

const connect = () =>{
   mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
   })
   .then(()=>{
      console.log("Conectado no mongo atlas")
   })
   .catch((error)=>{
      console.log("Algo deu errado")
      console.error(error)
   })
}

module.exports = { connect };