const mongoose = require("mongoose");

const SpecialistSchema = new mongoose.Schema({
   articles: {
      type: String,
      required: true
   },
   guidance: {
      type: String,
      required: true
   },
   approach: {
      type: String,
      required: true
   },
   userId: {
      type: mongoose.ObjectId
   },
   date: {
      type: Date,
      require: true,
      default: new Date
   }
});

const Specialist = mongoose.model("Company", SpecialistSchema);

module.exports = Specialist;
