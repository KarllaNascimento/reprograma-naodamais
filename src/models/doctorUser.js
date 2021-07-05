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
   state: {
      type: String,
      required: true
   },
   description: {
      type: String
   },
   price: {
      type: Number,
      required: true
   },
   healthPlan: {
      type: Boolean,
      required: true
   },
   userId: {
      type: mongoose.ObjectId  //preciso mesmo do id?
   },
   date: {
      type: Date,
      require: true,
      default: new Date
   }
});

const Doctor = mongoose.model("Company", DoctorSchema);

module.exports = Doctor;


// colocar um booleano para deixar aparecendo ou privado
// contar a problemática e solução

// quero aparexcer
// naõ quero aparexcerum if
// criar uma ropta dizendo que quer aparexcer
// caso não
