const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   area: {
      type: String,
      required: true
   },
   infringement: {
      type: String,
      required: true
   },
   state: {
      type: String,
      required: true
   },
   userId: {
      type: mongoose.ObjectId
   },
   date: {
      type: Date
   }
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;



