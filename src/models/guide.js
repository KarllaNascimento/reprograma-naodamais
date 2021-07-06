const mongoose = require("mongoose");

const GuideSchema = new mongoose.Schema({
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

const Guide = mongoose.model("Guide", GuideSchema);

module.exports = Guide;
