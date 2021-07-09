const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   adress: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   feminineGender: {
      type: Boolean,
      required: true
   },
   socialPrice: {
      type: Boolean,
      required: true
   },
   healthPlan: {
      type: Boolean,
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

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;