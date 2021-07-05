const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   name: {
      type: String
   },
   email : {
      type : String,
      required: true,
      match : /.+\@.+\..+/,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   crm: {
      type: String,
      required: true
   }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;